import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TenantContextDTO, TenantContextResourceService } from 'aig-management';
import { LocalStorageService } from 'ngx-webstorage';
import { UserService } from '../user/user.service';

@Injectable({
	providedIn: 'root'
})
export class EnzoContextService {
	private activeContext: any;

	constructor(
		private userService: UserService,
		private localStorage: LocalStorageService,
		private router: Router,
		private tenantContextResourceService: TenantContextResourceService,
	) { }

	getActiveContext() {
		return this.activeContext;
	}

	async setCurrentAndActiveContext(context: TenantContextDTO) {
		let user = await this.userService.get();
		
		let currentContexts = await this.getCurrentContexts();
		if(currentContexts == null) {
			currentContexts = {};
		}
		currentContexts[user.sub] = context;
		
		await this.localStorage.store("enzo_current-contexts", currentContexts);
		this.activeContext = context;
		this.navigateToContext();
	}

	async analizeActiveContext(): Promise<String> {
		let currentContext = await this.getCurrentContext();

		let queryParams = this.getQueryParams();
		if(queryParams.context != null && queryParams.context != "") {
			if(currentContext != null && queryParams.context == currentContext.contextCode) {
				this.activeContext = currentContext;
				return this.activeContext;
			}
	
			let otherContexts = await this.getOtherContexts();
			if(otherContexts != null && otherContexts[queryParams.context] != null) {
				this.activeContext = otherContexts[queryParams.context];
				return this.activeContext;
			}

			let request = {
				anameEquals: queryParams.context
			};
			let a = await this.tenantContextResourceService.getAllTenantContextsUsingGET(request).toPromise();
			console.log(a);
			// prende da DB TODO
			// salva in other
			return this.activeContext;
		}

		if(currentContext != null) {
			this.activeContext = currentContext;
			if(!this.notContextPage()) {
				this.addContextInParams();
			}
			return this.activeContext;
		}

		return;
	}

	async goToContextSelector() {
		await this.router.navigateByUrl("select-context");
	}

	private async getCurrentContext() {
		let user = await this.userService.get();
		
		let currentContexts = await this.getCurrentContexts();
		if(currentContexts == null) {
			return null;
		}

		let currentContext = currentContexts[user.sub];
		if (currentContext == null) {
			return null;
		}

		return currentContext;
	}

	private async getCurrentContexts() {
		let currentContexts = await this.localStorage.retrieve("enzo_current-contexts");

		if (currentContexts == null) {
			return null;
		}

		return currentContexts;
	}

	private async getOtherContexts() {
		let user = await this.userService.get();
		let otherContexts = await this.localStorage.retrieve("enzo_other-contexts");

		if (otherContexts == null) {
			return null;
		}

		let otherUserContexts = otherContexts[user.sub];

		if (otherUserContexts == null) {
			return null;
		}

		return otherUserContexts;
	}









	private addContextInParams() {
		setTimeout(() => { 
			let currentUrlArray = window.location.pathname.split("?");
			this.navigate(currentUrlArray[0])	
		}, 1000);
	}


	private navigateToContext() {
		this.navigate("/example");
	}


	navigate(url: string) {
		let queryParams: any = {};
		queryParams.context = this.activeContext.contextCode;
        this.router.navigate([url.substring(1)], { queryParams: queryParams });
	}










	private notContextPage() {
		let url = window.location.pathname;
		if(url.includes("select-context")) {
			return true;
		}
		if(url.includes("landing")) {
			return true;
		}
	}






	private getQueryParams(): any {
		return this.urlQueryStringToObjectParams(window.location.href);
	}

	private urlQueryStringToObjectParams(currentUrl: String): any {
		let queryParams: any = {};

		if(currentUrl == "/") {
			return null;
		}

		let currentUrlArray = currentUrl.split("?");
		let currentParamsString = currentUrlArray[1];
		if (currentParamsString != null && currentParamsString != "") {
			let currentParamsArray = currentParamsString.split("&");

			currentParamsArray.forEach((currentParam) => {
				let currentParamArray = currentParam.split("=");
				let key = currentParamArray[0];
				let value = currentParamArray[1];

				queryParams[key] = value;
			});
		}

		return queryParams;
	}
}
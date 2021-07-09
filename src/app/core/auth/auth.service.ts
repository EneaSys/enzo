import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
	providedIn: 'root'
})
export class EnzoAuthService {
	private _starting: boolean = false;
	private _isInit: boolean = false;
	private _isAuthenticated: boolean = false;
	
	constructor(
		private router: Router,
		private oktaAuth: OktaAuthService,
	) { }

	private async init() {
		if(this._isInit || this._starting) {
			return;
		}
		this._starting = true;

		// Is autenticated
		this._isAuthenticated = await this.oktaAuth.isAuthenticated();
		this.oktaAuth.$authenticationState.subscribe(
			(isAuthenticated: boolean)  => this._isAuthenticated = isAuthenticated
		);

		if(!this._isAuthenticated) {
			return false;
		}

		this._starting = false;
		this._isInit = true;

		return true;
	}

	async isAuthenticated(): Promise<boolean> {
		await this.init();
		return this._isAuthenticated;
	}

	async login(url: string) {
		await this.router.navigateByUrl("login");
	}

	getAccessToken() {
		return this.oktaAuth.getAccessToken();
	}

	getUser() {
		return this.oktaAuth.getUser();
	}

	logout() {
		this.oktaAuth.signOut();
	}
}
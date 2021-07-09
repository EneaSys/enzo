import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { EnzoContextService } from './context.service';


@Injectable()
export class EnzoContextGuard implements CanActivate, CanActivateChild {
	constructor(
		private enzoContextService: EnzoContextService
	) { }

	async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		let activeContext = await this.enzoContextService.analizeActiveContext();
		if (activeContext) {
			return true;
		}
		await this.enzoContextService.goToContextSelector();

		return false;
	}

	async canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean> {
		return this.canActivate(route, state);
	}
}
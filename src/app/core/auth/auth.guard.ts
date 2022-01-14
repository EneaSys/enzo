import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router, } from '@angular/router';
import { EnzoAuthService } from './auth.service';

@Injectable()
export class EnzoAuthGuard implements CanActivate, CanActivateChild {
	constructor(
		private router: Router,
		private enzoAuthService: EnzoAuthService,
	) { }

	async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		try {
			let userInfo = await this.enzoAuthService.getUser();
			if(userInfo !== null) {
				return true;
			}
		} catch (e) { }
		this.router.navigateByUrl("/login");
		return false;
	}


	async canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean> {
		return this.canActivate(route, state);
	}
}
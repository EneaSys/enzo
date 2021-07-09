import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, } from '@angular/router';
import { UserService } from '../user/user.service';
import { EnzoAuthService } from './auth.service';


@Injectable()
export class EnzoAuthGuard implements CanActivate, CanActivateChild {
	constructor(
		private enzoAuthService: EnzoAuthService,
		private userService: UserService,
	) { }

	async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
		const isAuthenticated = await this.enzoAuthService.isAuthenticated();
		if (isAuthenticated) {
			this.userService.get();
			return true;
		}

		await this.enzoAuthService.login(state.url);

		return false;
	}


	async canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Promise<boolean> {
		return this.canActivate(route, state);
	}
}
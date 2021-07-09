import { Injectable } from '@angular/core';
import { from, Observable, ReplaySubject } from 'rxjs';
import { EnzoAuthService } from 'app/core/auth/auth.service';
import { User } from './user.types';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
	private isLoaded: boolean = false;
	private isLoading: boolean = false;

    private user: any;

	private _user: ReplaySubject<any> = new ReplaySubject<any>(1);

    constructor(private _enzoAuthService: EnzoAuthService) { }

    
    get user$(): Observable<User> {
        return this._user.asObservable();
    }

    async get() {
		if(this.isLoaded || this.isLoading) {
			return this.user;
		}
		this.isLoading = true;

		this.user = await this._enzoAuthService.getUser();
		this.isLoading = false;
		this.isLoaded = true;
        return this.user;
    }

	load(): Observable<any> {
		if(this.isLoaded) {
			return new Observable<any>(observer => {
				observer.next(this.user);
				observer.complete();
			});
		}
        return from(this._enzoAuthService.getUser()).pipe(
            tap((user) => {
                this.user = user;
				this.isLoaded = true;
            })
        );
    }

}

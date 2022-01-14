import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EnzoContextService } from '../context/context.service';
import { EnzoAuthService } from '../auth/auth.service';

@Injectable()
export class AigBackendInterceptor implements HttpInterceptor {
    constructor(
        private authService: EnzoAuthService,
        private contextService: EnzoContextService,
    ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.prepareHeader(request)).pipe(
            switchMap(request => {
                return next.handle(request);
            })
        );
    }

    private async prepareHeader(request: HttpRequest<any>): Promise<HttpRequest<any>> {
        if (request.url.includes("api-gest")) {
            if(request.url.includes("/m8t/")) {
                return this.prepareHeaderAuthorized(request);
            }
            if(request.url.includes("/s6d/")) {
                return this.prepareHeaderAuthorized(request);
            }
            return this.prepareHeaderWithContext(request);
        }
        else {
            return request;
        }
    }

    private async prepareHeaderAuthorized(request: HttpRequest<any>): Promise<HttpRequest<any>> {
        const token = await this.authService.getAccessToken();

        request = request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + token,
            }
        });

        return request;
    }

    private async prepareHeaderWithContext(request: HttpRequest<any>): Promise<HttpRequest<any>> {
        const tokenPromise = this.authService.getAccessToken();
        const contextCodePromise = this.contextService.getActiveContext();

		let res = await Promise.all([tokenPromise, contextCodePromise]);

        let token = res[0];
        let context = res[1];

        request = request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + token,
                'X-Tenant-Code': context.contextCode,
            }
        });

        return request;
    }
}

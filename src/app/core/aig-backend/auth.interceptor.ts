import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { EnzoAuthService } from '../auth/auth.service';
import { EnzoContextService } from '../context/context.service';



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
        const token = this.authService.getAccessToken();

        request = request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + token,
            }
        });

        return request;
    }

    private async prepareHeaderWithContext(request: HttpRequest<any>): Promise<HttpRequest<any>> {
        const token = this.authService.getAccessToken();
        const context = this.contextService.getActiveContext();

        request = request.clone({
            setHeaders: {
                'Authorization': 'Bearer ' + token,
                'X-Tenant-Code': context.code,
            }
        });

        return request;
    }
}

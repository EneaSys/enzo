import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RappresentanteFiscaleDTO, RappresentanteFiscaleResourceService } from 'aig-italianlegislation';

@Injectable()
export class RappresentanteFiscaleResolver implements Resolve<Observable<RappresentanteFiscaleDTO>> {
    constructor(private resourceService: RappresentanteFiscaleResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getRappresentanteFiscaleUsingGET(id);
    }
}
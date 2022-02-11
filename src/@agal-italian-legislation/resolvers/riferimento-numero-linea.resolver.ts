import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RiferimentoNumeroLineaDTO, RiferimentoNumeroLineaResourceService } from 'aig-italianlegislation';

@Injectable()
export class RiferimentoNumeroLineaResolver implements Resolve<Observable<RiferimentoNumeroLineaDTO>> {
    constructor(private resourceService: RiferimentoNumeroLineaResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getRiferimentoNumeroLineaUsingGET(id);
    }
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FatturaElettronicaHeaderDTO, FatturaElettronicaHeaderResourceService } from 'aig-italianlegislation';

@Injectable()
export class FatturaElettronicaHeaderResolver implements Resolve<Observable<FatturaElettronicaHeaderDTO>> {
    constructor(private resourceService: FatturaElettronicaHeaderResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getFatturaElettronicaHeaderUsingGET(id);
    }
}
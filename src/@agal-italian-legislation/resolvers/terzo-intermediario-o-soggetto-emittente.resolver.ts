import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TerzoIntermediarioOSoggettoEmittenteDTO, TerzoIntermediarioOSoggettoEmittenteResourceService } from 'aig-italianlegislation';

@Injectable()
export class TerzoIntermediarioOSoggettoEmittenteResolver implements Resolve<Observable<TerzoIntermediarioOSoggettoEmittenteDTO>> {
    constructor(private resourceService: TerzoIntermediarioOSoggettoEmittenteResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getTerzoIntermediarioOSoggettoEmittenteUsingGET(id);
    }
}
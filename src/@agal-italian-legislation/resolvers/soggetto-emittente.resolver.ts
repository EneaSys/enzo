import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SoggettoEmittenteDTO, SoggettoEmittenteResourceService } from 'aig-italianlegislation';

@Injectable()
export class SoggettoEmittenteResolver implements Resolve<Observable<SoggettoEmittenteDTO>> {
    constructor(private resourceService: SoggettoEmittenteResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getSoggettoEmittenteUsingGET(id);
    }
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiContrattoDTO, DatiContrattoResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiContrattoResolver implements Resolve<Observable<DatiContrattoDTO>> {
    constructor(private resourceService: DatiContrattoResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiContrattoUsingGET(id);
    }
}
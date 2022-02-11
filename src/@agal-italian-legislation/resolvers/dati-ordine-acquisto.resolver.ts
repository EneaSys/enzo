import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiOrdineAcquistoDTO, DatiOrdineAcquistoResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiOrdineAcquistoResolver implements Resolve<Observable<DatiOrdineAcquistoDTO>> {
    constructor(private resourceService: DatiOrdineAcquistoResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiOrdineAcquistoUsingGET(id);
    }
}
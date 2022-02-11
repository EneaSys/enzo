import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiTrasportoDTO, DatiTrasportoResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiTrasportoResolver implements Resolve<Observable<DatiTrasportoDTO>> {
    constructor(private resourceService: DatiTrasportoResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiTrasportoUsingGET(id);
    }
}
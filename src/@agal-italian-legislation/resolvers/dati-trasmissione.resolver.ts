import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiTrasmissioneDTO, DatiTrasmissioneResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiTrasmissioneResolver implements Resolve<Observable<DatiTrasmissioneDTO>> {
    constructor(private resourceService: DatiTrasmissioneResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiTrasmissioneUsingGET(id);
    }
}
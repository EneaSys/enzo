import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiSalDTO, DatiSalResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiSalResolver implements Resolve<Observable<DatiSalDTO>> {
    constructor(private resourceService: DatiSalResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiSalUsingGET(id);
    }
}
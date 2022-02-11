import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiFattureCollegateDTO, DatiFattureCollegateResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiFattureCollegateResolver implements Resolve<Observable<DatiFattureCollegateDTO>> {
    constructor(private resourceService: DatiFattureCollegateResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiFattureCollegateUsingGET(id);
    }
}
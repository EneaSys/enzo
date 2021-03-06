import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PartecipationStatusDTO, PartecipationStatusResourceService } from 'aig-italianlegislation';

@Injectable()
export class PartecipationStatusResolver implements Resolve<Observable<PartecipationStatusDTO>> {
    constructor(private resourceService: PartecipationStatusResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getPartecipationStatusUsingGET(id);
    }
}
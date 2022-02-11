import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PartecipationModalityDTO, PartecipationModalityResourceService } from 'aig-italianlegislation';

@Injectable()
export class PartecipationModalityResolver implements Resolve<Observable<PartecipationModalityDTO>> {
    constructor(private resourceService: PartecipationModalityResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getPartecipationModalityUsingGET(id);
    }
}
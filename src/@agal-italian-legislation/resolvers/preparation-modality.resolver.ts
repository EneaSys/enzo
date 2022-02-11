import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PreparationModalityDTO, PreparationModalityResourceService } from 'aig-italianlegislation';

@Injectable()
export class PreparationModalityResolver implements Resolve<Observable<PreparationModalityDTO>> {
    constructor(private resourceService: PreparationModalityResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getPreparationModalityUsingGET(id);
    }
}
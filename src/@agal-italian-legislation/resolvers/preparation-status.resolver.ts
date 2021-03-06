import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PreparationStatusDTO, PreparationStatusResourceService } from 'aig-italianlegislation';

@Injectable()
export class PreparationStatusResolver implements Resolve<Observable<PreparationStatusDTO>> {
    constructor(private resourceService: PreparationStatusResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getPreparationStatusUsingGET(id);
    }
}
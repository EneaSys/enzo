import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PreparationDTO, PreparationResourceService } from 'aig-italianlegislation';

@Injectable()
export class PreparationResolver implements Resolve<Observable<PreparationDTO>> {
    constructor(private resourceService: PreparationResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getPreparationUsingGET(id);
    }
}
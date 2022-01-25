import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EopooTypeDTO, EopooTypeResourceService } from 'aig-generic';

@Injectable()
export class EopooTypeResolver implements Resolve<Observable<EopooTypeDTO>> {
    constructor(private resourceService: EopooTypeResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getEopooTypeUsingGET(id);
    }
}
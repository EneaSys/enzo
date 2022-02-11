import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CedentePrestatoreDTO, CedentePrestatoreResourceService } from 'aig-italianlegislation';

@Injectable()
export class CedentePrestatoreResolver implements Resolve<Observable<CedentePrestatoreDTO>> {
    constructor(private resourceService: CedentePrestatoreResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getCedentePrestatoreUsingGET(id);
    }
}
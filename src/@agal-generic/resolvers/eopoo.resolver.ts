import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { EopooDTO, EopooResourceService } from 'aig-generic';

@Injectable()
export class EopooResolver implements Resolve<Observable<EopooDTO>> {
    constructor(private resourceService: EopooResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getEopooUsingGET(id);
    }
}
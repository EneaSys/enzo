import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IndirizzoResaDTO, IndirizzoResaResourceService } from 'aig-italianlegislation';

@Injectable()
export class IndirizzoResaResolver implements Resolve<Observable<IndirizzoResaDTO>> {
    constructor(private resourceService: IndirizzoResaResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getIndirizzoResaUsingGET(id);
    }
}
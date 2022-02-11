import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiDdtDTO, DatiDdtResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiDdtResolver implements Resolve<Observable<DatiDdtDTO>> {
    constructor(private resourceService: DatiDdtResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiDdtUsingGET(id);
    }
}
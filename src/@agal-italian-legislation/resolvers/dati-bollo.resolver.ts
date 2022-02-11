import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiBolloDTO, DatiBolloResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiBolloResolver implements Resolve<Observable<DatiBolloDTO>> {
    constructor(private resourceService: DatiBolloResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiBolloUsingGET(id);
    }
}
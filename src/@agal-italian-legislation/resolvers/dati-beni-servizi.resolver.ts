import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiBeniServiziDTO, DatiBeniServiziResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiBeniServiziResolver implements Resolve<Observable<DatiBeniServiziDTO>> {
    constructor(private resourceService: DatiBeniServiziResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiBeniServiziUsingGET(id);
    }
}
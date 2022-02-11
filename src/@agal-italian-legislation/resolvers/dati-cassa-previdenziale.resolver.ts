import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiCassaPrevidenzialeDTO, DatiCassaPrevidenzialeResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiCassaPrevidenzialeResolver implements Resolve<Observable<DatiCassaPrevidenzialeDTO>> {
    constructor(private resourceService: DatiCassaPrevidenzialeResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiCassaPrevidenzialeUsingGET(id);
    }
}
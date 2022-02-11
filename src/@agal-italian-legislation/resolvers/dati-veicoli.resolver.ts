import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiVeicoliDTO, DatiVeicoliResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiVeicoliResolver implements Resolve<Observable<DatiVeicoliDTO>> {
    constructor(private resourceService: DatiVeicoliResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiVeicoliUsingGET(id);
    }
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiRitenutaDTO, DatiRitenutaResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiRitenutaResolver implements Resolve<Observable<DatiRitenutaDTO>> {
    constructor(private resourceService: DatiRitenutaResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiRitenutaUsingGET(id);
    }
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiGeneraliDTO, DatiGeneraliResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiGeneraliResolver implements Resolve<Observable<DatiGeneraliDTO>> {
    constructor(private resourceService: DatiGeneraliResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiGeneraliUsingGET(id);
    }
}
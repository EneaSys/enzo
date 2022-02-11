import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DettaglioLineaDTO, DettaglioLineaResourceService } from 'aig-italianlegislation';

@Injectable()
export class DettaglioLineaResolver implements Resolve<Observable<DettaglioLineaDTO>> {
    constructor(private resourceService: DettaglioLineaResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDettaglioLineaUsingGET(id);
    }
}
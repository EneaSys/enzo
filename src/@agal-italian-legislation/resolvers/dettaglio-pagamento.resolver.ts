import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DettaglioPagamentoDTO, DettaglioPagamentoResourceService } from 'aig-italianlegislation';

@Injectable()
export class DettaglioPagamentoResolver implements Resolve<Observable<DettaglioPagamentoDTO>> {
    constructor(private resourceService: DettaglioPagamentoResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDettaglioPagamentoUsingGET(id);
    }
}
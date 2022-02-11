import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiGeneraliDocumentoDTO, DatiGeneraliDocumentoResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiGeneraliDocumentoResolver implements Resolve<Observable<DatiGeneraliDocumentoDTO>> {
    constructor(private resourceService: DatiGeneraliDocumentoResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiGeneraliDocumentoUsingGET(id);
    }
}
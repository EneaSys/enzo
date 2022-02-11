import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AltriDatiGestionaliDTO, AltriDatiGestionaliResourceService } from 'aig-italianlegislation';

@Injectable()
export class AltriDatiGestionaliResolver implements Resolve<Observable<AltriDatiGestionaliDTO>> {
    constructor(private resourceService: AltriDatiGestionaliResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getAltriDatiGestionaliUsingGET(id);
    }
}
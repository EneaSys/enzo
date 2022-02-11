import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FatturaPrincipaleDTO, FatturaPrincipaleResourceService } from 'aig-italianlegislation';

@Injectable()
export class FatturaPrincipaleResolver implements Resolve<Observable<FatturaPrincipaleDTO>> {
    constructor(private resourceService: FatturaPrincipaleResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getFatturaPrincipaleUsingGET(id);
    }
}
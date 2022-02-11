import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DesignatedCompanyDTO, DesignatedCompanyResourceService } from 'aig-italianlegislation';

@Injectable()
export class DesignatedCompanyResolver implements Resolve<Observable<DesignatedCompanyDTO>> {
    constructor(private resourceService: DesignatedCompanyResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDesignatedCompanyUsingGET(id);
    }
}
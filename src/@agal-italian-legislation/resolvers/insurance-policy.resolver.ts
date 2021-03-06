import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { InsurancePolicyDTO, InsurancePolicyResourceService } from 'aig-italianlegislation';

@Injectable()
export class InsurancePolicyResolver implements Resolve<Observable<InsurancePolicyDTO>> {
    constructor(private resourceService: InsurancePolicyResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getInsurancePolicyUsingGET(id);
    }
}
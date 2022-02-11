import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { InsurancePolicyStatusDTO, InsurancePolicyStatusResourceService } from 'aig-italianlegislation';

@Injectable()
export class InsurancePolicyStatusResolver implements Resolve<Observable<InsurancePolicyStatusDTO>> {
    constructor(private resourceService: InsurancePolicyStatusResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getInsurancePolicyStatusUsingGET(id);
    }
}
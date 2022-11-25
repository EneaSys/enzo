import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigInsurancePolicyDTO } from '../class/insurance-policy-dto.class';
import { AigInsurancePolicyResourceService } from '../services/insurance-policy.service';

@Injectable()
export class AigInsurancePolicyResolver implements Resolve<Observable<AigInsurancePolicyDTO>> {
	constructor(private insurancePolicyResourceService: AigInsurancePolicyResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.insurancePolicyResourceService.getInsurancePolicyUsingGET(+id);
	}
}
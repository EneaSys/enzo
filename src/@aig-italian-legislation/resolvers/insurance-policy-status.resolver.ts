import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigInsurancePolicyStatusDTO } from '../class/insurance-policy-status-dto.class';
import { AigInsurancePolicyStatusResourceService } from '../services/insurance-policy-status.service';

@Injectable()
export class AigInsurancePolicyStatusResolver implements Resolve<Observable<AigInsurancePolicyStatusDTO>> {
	constructor(private insurancePolicyStatusResourceService: AigInsurancePolicyStatusResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.insurancePolicyStatusResourceService.getInsurancePolicyStatusUsingGET(+id);
	}
}
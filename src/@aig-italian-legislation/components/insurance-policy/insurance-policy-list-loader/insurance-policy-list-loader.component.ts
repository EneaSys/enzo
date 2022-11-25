import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigInsurancePolicyDTO } from '../../../class/insurance-policy-dto.class';
import { AigInsurancePolicyResourceService } from '../../../services/insurance-policy.service';

@Component({
	selector: 'aig-insurance-policy-list-loader',
	templateUrl: './insurance-policy-list-loader.component.html',
	styleUrls: ['./insurance-policy-list-loader.component.scss']
})
export class AigInsurancePolicyListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigInsurancePolicyResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllInsurancePoliciesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countInsurancePoliciesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

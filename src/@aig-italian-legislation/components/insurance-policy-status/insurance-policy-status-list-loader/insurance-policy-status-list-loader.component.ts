import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigInsurancePolicyStatusDTO } from '../../../class/insurance-policy-status-dto.class';
import { AigInsurancePolicyStatusResourceService } from '../../../services/insurance-policy-status.service';

@Component({
	selector: 'aig-insurance-policy-status-list-loader',
	templateUrl: './insurance-policy-status-list-loader.component.html',
	styleUrls: ['./insurance-policy-status-list-loader.component.scss']
})
export class AigInsurancePolicyStatusListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigInsurancePolicyStatusResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllInsurancePolicyStatusesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countInsurancePolicyStatusesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

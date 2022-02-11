import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { InsurancePolicyStatusResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-insurance-policy-status-list-loader',
    templateUrl: './insurance-policy-status-list-loader.component.html',
    styleUrls: ['./insurance-policy-status-list-loader.component.scss']
})
export class AgalInsurancePolicyStatusListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: InsurancePolicyStatusResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllInsurancePolicyStatusesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countInsurancePolicyStatusesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

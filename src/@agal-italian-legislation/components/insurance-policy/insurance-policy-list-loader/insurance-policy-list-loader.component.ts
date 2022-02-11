import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { InsurancePolicyResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-insurance-policy-list-loader',
    templateUrl: './insurance-policy-list-loader.component.html',
    styleUrls: ['./insurance-policy-list-loader.component.scss']
})
export class AgalInsurancePolicyListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: InsurancePolicyResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllInsurancePoliciesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countInsurancePoliciesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

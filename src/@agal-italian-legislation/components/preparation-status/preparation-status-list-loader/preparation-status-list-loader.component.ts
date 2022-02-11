import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { PreparationStatusResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-preparation-status-list-loader',
    templateUrl: './preparation-status-list-loader.component.html',
    styleUrls: ['./preparation-status-list-loader.component.scss']
})
export class AgalPreparationStatusListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: PreparationStatusResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllPreparationStatusesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countPreparationStatusesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

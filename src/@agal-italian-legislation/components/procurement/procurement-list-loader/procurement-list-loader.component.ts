import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { ProcurementResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-procurement-list-loader',
    templateUrl: './procurement-list-loader.component.html',
    styleUrls: ['./procurement-list-loader.component.scss']
})
export class AgalProcurementListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: ProcurementResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllProcurementsUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countProcurementsUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

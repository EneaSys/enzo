import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { ProcurementLotResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-procurement-lot-list-loader',
    templateUrl: './procurement-lot-list-loader.component.html',
    styleUrls: ['./procurement-lot-list-loader.component.scss']
})
export class AgalProcurementLotListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: ProcurementLotResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllProcurementLotsUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countProcurementLotsUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

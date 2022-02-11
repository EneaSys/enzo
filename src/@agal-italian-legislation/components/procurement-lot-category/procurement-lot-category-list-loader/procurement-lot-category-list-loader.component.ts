import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { ProcurementLotCategoryResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-procurement-lot-category-list-loader',
    templateUrl: './procurement-lot-category-list-loader.component.html',
    styleUrls: ['./procurement-lot-category-list-loader.component.scss']
})
export class AgalProcurementLotCategoryListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: ProcurementLotCategoryResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllProcurementLotCategoriesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countProcurementLotCategoriesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

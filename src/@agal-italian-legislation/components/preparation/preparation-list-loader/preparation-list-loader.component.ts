import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { PreparationResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-preparation-list-loader',
    templateUrl: './preparation-list-loader.component.html',
    styleUrls: ['./preparation-list-loader.component.scss']
})
export class AgalPreparationListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: PreparationResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllPreparationsUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countPreparationsUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

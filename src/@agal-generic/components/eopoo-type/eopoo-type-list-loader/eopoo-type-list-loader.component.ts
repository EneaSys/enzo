import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { EopooTypeResourceService } from 'aig-generic';

@Component({
    selector: 'agal-eopoo-type-list-loader',
    templateUrl: './eopoo-type-list-loader.component.html',
    styleUrls: ['./eopoo-type-list-loader.component.scss']
})
export class AgalEopooTypeListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: EopooTypeResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllEopooTypesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countEopooTypesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

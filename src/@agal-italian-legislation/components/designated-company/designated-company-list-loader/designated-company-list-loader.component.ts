import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DesignatedCompanyResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-designated-company-list-loader',
    templateUrl: './designated-company-list-loader.component.html',
    styleUrls: ['./designated-company-list-loader.component.scss']
})
export class AgalDesignatedCompanyListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DesignatedCompanyResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDesignatedCompaniesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDesignatedCompaniesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

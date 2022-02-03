import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { ReferentResourceService } from 'aig-generic';

@Component({
    selector: 'agal-referent-list-loader',
    templateUrl: './referent-list-loader.component.html',
    styleUrls: ['./referent-list-loader.component.scss']
})
export class AgalReferentListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: ReferentResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllReferentsUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countReferentsUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

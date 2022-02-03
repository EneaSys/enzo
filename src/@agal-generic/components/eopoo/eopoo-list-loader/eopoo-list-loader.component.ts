import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { EopooResourceService } from 'aig-generic';

@Component({
    selector: 'agal-eopoo-list-loader',
    templateUrl: './eopoo-list-loader.component.html',
    styleUrls: ['./eopoo-list-loader.component.scss']
})
export class AgalEopooListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: EopooResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllEopoosUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countEopoosUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

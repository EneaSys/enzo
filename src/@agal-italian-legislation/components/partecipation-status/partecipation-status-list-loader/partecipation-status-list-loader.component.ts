import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { PartecipationStatusResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-partecipation-status-list-loader',
    templateUrl: './partecipation-status-list-loader.component.html',
    styleUrls: ['./partecipation-status-list-loader.component.scss']
})
export class AgalPartecipationStatusListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: PartecipationStatusResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllPartecipationStatusesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countPartecipationStatusesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

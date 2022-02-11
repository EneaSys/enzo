import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { PartecipationResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-partecipation-list-loader',
    templateUrl: './partecipation-list-loader.component.html',
    styleUrls: ['./partecipation-list-loader.component.scss']
})
export class AgalPartecipationListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: PartecipationResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllPartecipationsUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countPartecipationsUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

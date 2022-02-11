import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { PartecipationModalityResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-partecipation-modality-list-loader',
    templateUrl: './partecipation-modality-list-loader.component.html',
    styleUrls: ['./partecipation-modality-list-loader.component.scss']
})
export class AgalPartecipationModalityListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: PartecipationModalityResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllPartecipationModalitiesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countPartecipationModalitiesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

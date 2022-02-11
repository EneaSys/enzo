import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { PreparationModalityResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-preparation-modality-list-loader',
    templateUrl: './preparation-modality-list-loader.component.html',
    styleUrls: ['./preparation-modality-list-loader.component.scss']
})
export class AgalPreparationModalityListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: PreparationModalityResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllPreparationModalitiesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countPreparationModalitiesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

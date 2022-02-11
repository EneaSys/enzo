import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { ScontoMaggiorazioneResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-sconto-maggiorazione-list-loader',
    templateUrl: './sconto-maggiorazione-list-loader.component.html',
    styleUrls: ['./sconto-maggiorazione-list-loader.component.scss']
})
export class AgalScontoMaggiorazioneListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: ScontoMaggiorazioneResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllScontoMaggiorazionesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countScontoMaggiorazionesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

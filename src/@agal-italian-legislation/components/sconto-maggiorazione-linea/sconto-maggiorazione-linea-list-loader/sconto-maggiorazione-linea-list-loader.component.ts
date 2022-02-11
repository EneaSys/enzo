import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { ScontoMaggiorazioneLineaResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-sconto-maggiorazione-linea-list-loader',
    templateUrl: './sconto-maggiorazione-linea-list-loader.component.html',
    styleUrls: ['./sconto-maggiorazione-linea-list-loader.component.scss']
})
export class AgalScontoMaggiorazioneLineaListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: ScontoMaggiorazioneLineaResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllScontoMaggiorazioneLineasUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countScontoMaggiorazioneLineasUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DettaglioLineaResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dettaglio-linea-list-loader',
    templateUrl: './dettaglio-linea-list-loader.component.html',
    styleUrls: ['./dettaglio-linea-list-loader.component.scss']
})
export class AgalDettaglioLineaListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DettaglioLineaResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDettaglioLineasUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDettaglioLineasUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

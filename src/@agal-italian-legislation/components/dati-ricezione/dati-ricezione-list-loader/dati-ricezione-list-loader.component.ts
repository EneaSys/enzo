import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiRicezioneResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-ricezione-list-loader',
    templateUrl: './dati-ricezione-list-loader.component.html',
    styleUrls: ['./dati-ricezione-list-loader.component.scss']
})
export class AgalDatiRicezioneListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiRicezioneResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiRicezionesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiRicezionesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

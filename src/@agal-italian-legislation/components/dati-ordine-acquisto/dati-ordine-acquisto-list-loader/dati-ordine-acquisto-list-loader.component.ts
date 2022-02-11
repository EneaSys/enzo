import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiOrdineAcquistoResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-ordine-acquisto-list-loader',
    templateUrl: './dati-ordine-acquisto-list-loader.component.html',
    styleUrls: ['./dati-ordine-acquisto-list-loader.component.scss']
})
export class AgalDatiOrdineAcquistoListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiOrdineAcquistoResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiOrdineAcquistosUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiOrdineAcquistosUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

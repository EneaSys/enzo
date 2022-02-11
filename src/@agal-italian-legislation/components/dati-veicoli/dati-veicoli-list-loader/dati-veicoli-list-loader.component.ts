import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiVeicoliResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-veicoli-list-loader',
    templateUrl: './dati-veicoli-list-loader.component.html',
    styleUrls: ['./dati-veicoli-list-loader.component.scss']
})
export class AgalDatiVeicoliListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiVeicoliResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiVeicolisUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiVeicolisUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

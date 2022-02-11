import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { RiferimentoNumeroLineaResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-riferimento-numero-linea-list-loader',
    templateUrl: './riferimento-numero-linea-list-loader.component.html',
    styleUrls: ['./riferimento-numero-linea-list-loader.component.scss']
})
export class AgalRiferimentoNumeroLineaListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: RiferimentoNumeroLineaResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllRiferimentoNumeroLineasUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countRiferimentoNumeroLineasUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiPagamentoResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-pagamento-list-loader',
    templateUrl: './dati-pagamento-list-loader.component.html',
    styleUrls: ['./dati-pagamento-list-loader.component.scss']
})
export class AgalDatiPagamentoListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiPagamentoResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiPagamentosUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiPagamentosUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

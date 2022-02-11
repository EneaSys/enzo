import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DettaglioPagamentoResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dettaglio-pagamento-list-loader',
    templateUrl: './dettaglio-pagamento-list-loader.component.html',
    styleUrls: ['./dettaglio-pagamento-list-loader.component.scss']
})
export class AgalDettaglioPagamentoListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DettaglioPagamentoResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDettaglioPagamentosUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDettaglioPagamentosUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

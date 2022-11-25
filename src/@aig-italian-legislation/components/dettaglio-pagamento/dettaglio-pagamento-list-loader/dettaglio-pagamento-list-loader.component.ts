import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDettaglioPagamentoDTO } from '../../../class/dettaglio-pagamento-dto.class';
import { AigDettaglioPagamentoResourceService } from '../../../services/dettaglio-pagamento.service';

@Component({
	selector: 'aig-dettaglio-pagamento-list-loader',
	templateUrl: './dettaglio-pagamento-list-loader.component.html',
	styleUrls: ['./dettaglio-pagamento-list-loader.component.scss']
})
export class AigDettaglioPagamentoListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDettaglioPagamentoResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDettaglioPagamentosUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDettaglioPagamentosUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

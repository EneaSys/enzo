import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiPagamentoDTO } from '../../../class/dati-pagamento-dto.class';
import { AigDatiPagamentoResourceService } from '../../../services/dati-pagamento.service';

@Component({
	selector: 'aig-dati-pagamento-list-loader',
	templateUrl: './dati-pagamento-list-loader.component.html',
	styleUrls: ['./dati-pagamento-list-loader.component.scss']
})
export class AigDatiPagamentoListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiPagamentoResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiPagamentosUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiPagamentosUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

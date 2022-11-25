import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigRiferimentoNumeroLineaDTO } from '../../../class/riferimento-numero-linea-dto.class';
import { AigRiferimentoNumeroLineaResourceService } from '../../../services/riferimento-numero-linea.service';

@Component({
	selector: 'aig-riferimento-numero-linea-list-loader',
	templateUrl: './riferimento-numero-linea-list-loader.component.html',
	styleUrls: ['./riferimento-numero-linea-list-loader.component.scss']
})
export class AigRiferimentoNumeroLineaListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigRiferimentoNumeroLineaResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllRiferimentoNumeroLineasUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countRiferimentoNumeroLineasUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

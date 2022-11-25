import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDettaglioLineaDTO } from '../../../class/dettaglio-linea-dto.class';
import { AigDettaglioLineaResourceService } from '../../../services/dettaglio-linea.service';

@Component({
	selector: 'aig-dettaglio-linea-list-loader',
	templateUrl: './dettaglio-linea-list-loader.component.html',
	styleUrls: ['./dettaglio-linea-list-loader.component.scss']
})
export class AigDettaglioLineaListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDettaglioLineaResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDettaglioLineasUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDettaglioLineasUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

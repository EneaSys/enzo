import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiOrdineAcquistoDTO } from '../../../class/dati-ordine-acquisto-dto.class';
import { AigDatiOrdineAcquistoResourceService } from '../../../services/dati-ordine-acquisto.service';

@Component({
	selector: 'aig-dati-ordine-acquisto-list-loader',
	templateUrl: './dati-ordine-acquisto-list-loader.component.html',
	styleUrls: ['./dati-ordine-acquisto-list-loader.component.scss']
})
export class AigDatiOrdineAcquistoListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiOrdineAcquistoResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiOrdineAcquistosUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiOrdineAcquistosUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

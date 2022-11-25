import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiRicezioneDTO } from '../../../class/dati-ricezione-dto.class';
import { AigDatiRicezioneResourceService } from '../../../services/dati-ricezione.service';

@Component({
	selector: 'aig-dati-ricezione-list-loader',
	templateUrl: './dati-ricezione-list-loader.component.html',
	styleUrls: ['./dati-ricezione-list-loader.component.scss']
})
export class AigDatiRicezioneListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiRicezioneResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiRicezionesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiRicezionesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

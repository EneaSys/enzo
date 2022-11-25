import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigScontoMaggiorazioneLineaDTO } from '../../../class/sconto-maggiorazione-linea-dto.class';
import { AigScontoMaggiorazioneLineaResourceService } from '../../../services/sconto-maggiorazione-linea.service';

@Component({
	selector: 'aig-sconto-maggiorazione-linea-list-loader',
	templateUrl: './sconto-maggiorazione-linea-list-loader.component.html',
	styleUrls: ['./sconto-maggiorazione-linea-list-loader.component.scss']
})
export class AigScontoMaggiorazioneLineaListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigScontoMaggiorazioneLineaResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllScontoMaggiorazioneLineasUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countScontoMaggiorazioneLineasUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

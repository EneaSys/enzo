import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigScontoMaggiorazioneDTO } from '../../../class/sconto-maggiorazione-dto.class';
import { AigScontoMaggiorazioneResourceService } from '../../../services/sconto-maggiorazione.service';

@Component({
	selector: 'aig-sconto-maggiorazione-list-loader',
	templateUrl: './sconto-maggiorazione-list-loader.component.html',
	styleUrls: ['./sconto-maggiorazione-list-loader.component.scss']
})
export class AigScontoMaggiorazioneListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigScontoMaggiorazioneResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllScontoMaggiorazionesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countScontoMaggiorazionesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigPartecipationModalityDTO } from '../../../class/partecipation-modality-dto.class';
import { AigPartecipationModalityResourceService } from '../../../services/partecipation-modality.service';

@Component({
	selector: 'aig-partecipation-modality-list-loader',
	templateUrl: './partecipation-modality-list-loader.component.html',
	styleUrls: ['./partecipation-modality-list-loader.component.scss']
})
export class AigPartecipationModalityListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigPartecipationModalityResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllPartecipationModalitiesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countPartecipationModalitiesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

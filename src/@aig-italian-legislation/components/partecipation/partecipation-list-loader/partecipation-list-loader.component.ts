import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigPartecipationDTO } from '../../../class/partecipation-dto.class';
import { AigPartecipationResourceService } from '../../../services/partecipation.service';

@Component({
	selector: 'aig-partecipation-list-loader',
	templateUrl: './partecipation-list-loader.component.html',
	styleUrls: ['./partecipation-list-loader.component.scss']
})
export class AigPartecipationListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigPartecipationResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllPartecipationsUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countPartecipationsUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

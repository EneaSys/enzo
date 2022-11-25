import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigPartecipationStatusDTO } from '../../../class/partecipation-status-dto.class';
import { AigPartecipationStatusResourceService } from '../../../services/partecipation-status.service';

@Component({
	selector: 'aig-partecipation-status-list-loader',
	templateUrl: './partecipation-status-list-loader.component.html',
	styleUrls: ['./partecipation-status-list-loader.component.scss']
})
export class AigPartecipationStatusListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigPartecipationStatusResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllPartecipationStatusesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countPartecipationStatusesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigPreparationStatusDTO } from '../../../class/preparation-status-dto.class';
import { AigPreparationStatusResourceService } from '../../../services/preparation-status.service';

@Component({
	selector: 'aig-preparation-status-list-loader',
	templateUrl: './preparation-status-list-loader.component.html',
	styleUrls: ['./preparation-status-list-loader.component.scss']
})
export class AigPreparationStatusListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigPreparationStatusResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllPreparationStatusesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countPreparationStatusesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

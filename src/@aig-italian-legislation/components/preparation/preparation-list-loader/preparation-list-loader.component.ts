import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigPreparationDTO } from '../../../class/preparation-dto.class';
import { AigPreparationResourceService } from '../../../services/preparation.service';

@Component({
	selector: 'aig-preparation-list-loader',
	templateUrl: './preparation-list-loader.component.html',
	styleUrls: ['./preparation-list-loader.component.scss']
})
export class AigPreparationListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigPreparationResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllPreparationsUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countPreparationsUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

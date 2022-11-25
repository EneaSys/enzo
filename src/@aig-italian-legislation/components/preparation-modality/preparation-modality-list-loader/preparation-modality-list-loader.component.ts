import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigPreparationModalityDTO } from '../../../class/preparation-modality-dto.class';
import { AigPreparationModalityResourceService } from '../../../services/preparation-modality.service';

@Component({
	selector: 'aig-preparation-modality-list-loader',
	templateUrl: './preparation-modality-list-loader.component.html',
	styleUrls: ['./preparation-modality-list-loader.component.scss']
})
export class AigPreparationModalityListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigPreparationModalityResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllPreparationModalitiesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countPreparationModalitiesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

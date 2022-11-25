import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigAllegatiDTO } from '../../../class/allegati-dto.class';
import { AigAllegatiResourceService } from '../../../services/allegati.service';

@Component({
	selector: 'aig-allegati-list-loader',
	templateUrl: './allegati-list-loader.component.html',
	styleUrls: ['./allegati-list-loader.component.scss']
})
export class AigAllegatiListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigAllegatiResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllAllegatisUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countAllegatisUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

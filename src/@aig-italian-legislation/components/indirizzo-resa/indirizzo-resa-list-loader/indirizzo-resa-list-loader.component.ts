import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigIndirizzoResaDTO } from '../../../class/indirizzo-resa-dto.class';
import { AigIndirizzoResaResourceService } from '../../../services/indirizzo-resa.service';

@Component({
	selector: 'aig-indirizzo-resa-list-loader',
	templateUrl: './indirizzo-resa-list-loader.component.html',
	styleUrls: ['./indirizzo-resa-list-loader.component.scss']
})
export class AigIndirizzoResaListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigIndirizzoResaResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllIndirizzoResasUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countIndirizzoResasUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

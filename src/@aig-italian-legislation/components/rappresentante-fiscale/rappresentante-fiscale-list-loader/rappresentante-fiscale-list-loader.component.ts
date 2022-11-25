import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigRappresentanteFiscaleDTO } from '../../../class/rappresentante-fiscale-dto.class';
import { AigRappresentanteFiscaleResourceService } from '../../../services/rappresentante-fiscale.service';

@Component({
	selector: 'aig-rappresentante-fiscale-list-loader',
	templateUrl: './rappresentante-fiscale-list-loader.component.html',
	styleUrls: ['./rappresentante-fiscale-list-loader.component.scss']
})
export class AigRappresentanteFiscaleListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigRappresentanteFiscaleResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllRappresentanteFiscalesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countRappresentanteFiscalesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

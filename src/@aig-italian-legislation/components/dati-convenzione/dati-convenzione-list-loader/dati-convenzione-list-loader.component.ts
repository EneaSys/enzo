import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiConvenzioneDTO } from '../../../class/dati-convenzione-dto.class';
import { AigDatiConvenzioneResourceService } from '../../../services/dati-convenzione.service';

@Component({
	selector: 'aig-dati-convenzione-list-loader',
	templateUrl: './dati-convenzione-list-loader.component.html',
	styleUrls: ['./dati-convenzione-list-loader.component.scss']
})
export class AigDatiConvenzioneListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiConvenzioneResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiConvenzionesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiConvenzionesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

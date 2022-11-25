import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiTrasmissioneDTO } from '../../../class/dati-trasmissione-dto.class';
import { AigDatiTrasmissioneResourceService } from '../../../services/dati-trasmissione.service';

@Component({
	selector: 'aig-dati-trasmissione-list-loader',
	templateUrl: './dati-trasmissione-list-loader.component.html',
	styleUrls: ['./dati-trasmissione-list-loader.component.scss']
})
export class AigDatiTrasmissioneListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiTrasmissioneResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiTrasmissionesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiTrasmissionesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

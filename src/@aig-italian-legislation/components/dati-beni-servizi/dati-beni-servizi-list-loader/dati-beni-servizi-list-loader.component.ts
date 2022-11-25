import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiBeniServiziDTO } from '../../../class/dati-beni-servizi-dto.class';
import { AigDatiBeniServiziResourceService } from '../../../services/dati-beni-servizi.service';

@Component({
	selector: 'aig-dati-beni-servizi-list-loader',
	templateUrl: './dati-beni-servizi-list-loader.component.html',
	styleUrls: ['./dati-beni-servizi-list-loader.component.scss']
})
export class AigDatiBeniServiziListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiBeniServiziResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiBeniServizisUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiBeniServizisUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

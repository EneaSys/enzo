import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiFattureCollegateDTO } from '../../../class/dati-fatture-collegate-dto.class';
import { AigDatiFattureCollegateResourceService } from '../../../services/dati-fatture-collegate.service';

@Component({
	selector: 'aig-dati-fatture-collegate-list-loader',
	templateUrl: './dati-fatture-collegate-list-loader.component.html',
	styleUrls: ['./dati-fatture-collegate-list-loader.component.scss']
})
export class AigDatiFattureCollegateListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiFattureCollegateResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiFattureCollegatesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiFattureCollegatesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

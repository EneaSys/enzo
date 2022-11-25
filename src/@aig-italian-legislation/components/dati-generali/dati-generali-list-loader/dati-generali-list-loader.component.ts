import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiGeneraliDTO } from '../../../class/dati-generali-dto.class';
import { AigDatiGeneraliResourceService } from '../../../services/dati-generali.service';

@Component({
	selector: 'aig-dati-generali-list-loader',
	templateUrl: './dati-generali-list-loader.component.html',
	styleUrls: ['./dati-generali-list-loader.component.scss']
})
export class AigDatiGeneraliListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiGeneraliResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiGeneralisUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiGeneralisUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

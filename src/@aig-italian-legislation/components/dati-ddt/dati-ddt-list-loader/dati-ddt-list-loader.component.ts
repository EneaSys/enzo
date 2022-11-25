import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiDdtDTO } from '../../../class/dati-ddt-dto.class';
import { AigDatiDdtResourceService } from '../../../services/dati-ddt.service';

@Component({
	selector: 'aig-dati-ddt-list-loader',
	templateUrl: './dati-ddt-list-loader.component.html',
	styleUrls: ['./dati-ddt-list-loader.component.scss']
})
export class AigDatiDdtListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiDdtResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiDdtsUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiDdtsUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

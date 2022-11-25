import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigCedentePrestatoreDTO } from '../../../class/cedente-prestatore-dto.class';
import { AigCedentePrestatoreResourceService } from '../../../services/cedente-prestatore.service';

@Component({
	selector: 'aig-cedente-prestatore-list-loader',
	templateUrl: './cedente-prestatore-list-loader.component.html',
	styleUrls: ['./cedente-prestatore-list-loader.component.scss']
})
export class AigCedentePrestatoreListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigCedentePrestatoreResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllCedentePrestatoresUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countCedentePrestatoresUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

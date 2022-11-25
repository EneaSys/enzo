import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiSalDTO } from '../../../class/dati-sal-dto.class';
import { AigDatiSalResourceService } from '../../../services/dati-sal.service';

@Component({
	selector: 'aig-dati-sal-list-loader',
	templateUrl: './dati-sal-list-loader.component.html',
	styleUrls: ['./dati-sal-list-loader.component.scss']
})
export class AigDatiSalListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiSalResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiSalsUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiSalsUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

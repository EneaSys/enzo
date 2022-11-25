import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigFatturaPrincipaleDTO } from '../../../class/fattura-principale-dto.class';
import { AigFatturaPrincipaleResourceService } from '../../../services/fattura-principale.service';

@Component({
	selector: 'aig-fattura-principale-list-loader',
	templateUrl: './fattura-principale-list-loader.component.html',
	styleUrls: ['./fattura-principale-list-loader.component.scss']
})
export class AigFatturaPrincipaleListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigFatturaPrincipaleResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllFatturaPrincipalesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countFatturaPrincipalesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

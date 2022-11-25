import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigFatturaElettronicaHeaderDTO } from '../../../class/fattura-elettronica-header-dto.class';
import { AigFatturaElettronicaHeaderResourceService } from '../../../services/fattura-elettronica-header.service';

@Component({
	selector: 'aig-fattura-elettronica-header-list-loader',
	templateUrl: './fattura-elettronica-header-list-loader.component.html',
	styleUrls: ['./fattura-elettronica-header-list-loader.component.scss']
})
export class AigFatturaElettronicaHeaderListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigFatturaElettronicaHeaderResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllFatturaElettronicaHeadersUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countFatturaElettronicaHeadersUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

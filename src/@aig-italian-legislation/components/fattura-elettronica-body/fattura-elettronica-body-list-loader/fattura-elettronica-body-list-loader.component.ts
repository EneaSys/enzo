import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigFatturaElettronicaBodyDTO } from '../../../class/fattura-elettronica-body-dto.class';
import { AigFatturaElettronicaBodyResourceService } from '../../../services/fattura-elettronica-body.service';

@Component({
	selector: 'aig-fattura-elettronica-body-list-loader',
	templateUrl: './fattura-elettronica-body-list-loader.component.html',
	styleUrls: ['./fattura-elettronica-body-list-loader.component.scss']
})
export class AigFatturaElettronicaBodyListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigFatturaElettronicaBodyResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllFatturaElettronicaBodiesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countFatturaElettronicaBodiesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

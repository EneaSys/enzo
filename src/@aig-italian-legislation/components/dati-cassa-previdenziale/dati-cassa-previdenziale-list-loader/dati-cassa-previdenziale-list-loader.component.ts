import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiCassaPrevidenzialeDTO } from '../../../class/dati-cassa-previdenziale-dto.class';
import { AigDatiCassaPrevidenzialeResourceService } from '../../../services/dati-cassa-previdenziale.service';

@Component({
	selector: 'aig-dati-cassa-previdenziale-list-loader',
	templateUrl: './dati-cassa-previdenziale-list-loader.component.html',
	styleUrls: ['./dati-cassa-previdenziale-list-loader.component.scss']
})
export class AigDatiCassaPrevidenzialeListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiCassaPrevidenzialeResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiCassaPrevidenzialesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiCassaPrevidenzialesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiContrattoDTO } from '../../../class/dati-contratto-dto.class';
import { AigDatiContrattoResourceService } from '../../../services/dati-contratto.service';

@Component({
	selector: 'aig-dati-contratto-list-loader',
	templateUrl: './dati-contratto-list-loader.component.html',
	styleUrls: ['./dati-contratto-list-loader.component.scss']
})
export class AigDatiContrattoListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiContrattoResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiContrattosUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiContrattosUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

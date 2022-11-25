import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigSoggettoEmittenteDTO } from '../../../class/soggetto-emittente-dto.class';
import { AigSoggettoEmittenteResourceService } from '../../../services/soggetto-emittente.service';

@Component({
	selector: 'aig-soggetto-emittente-list-loader',
	templateUrl: './soggetto-emittente-list-loader.component.html',
	styleUrls: ['./soggetto-emittente-list-loader.component.scss']
})
export class AigSoggettoEmittenteListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigSoggettoEmittenteResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllSoggettoEmittentesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countSoggettoEmittentesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

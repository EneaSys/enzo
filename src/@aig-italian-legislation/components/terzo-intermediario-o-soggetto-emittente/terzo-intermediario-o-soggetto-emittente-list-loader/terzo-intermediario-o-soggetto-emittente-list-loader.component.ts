import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigTerzoIntermediarioOSoggettoEmittenteDTO } from '../../../class/terzo-intermediario-o-soggetto-emittente-dto.class';
import { AigTerzoIntermediarioOSoggettoEmittenteResourceService } from '../../../services/terzo-intermediario-o-soggetto-emittente.service';

@Component({
	selector: 'aig-terzo-intermediario-o-soggetto-emittente-list-loader',
	templateUrl: './terzo-intermediario-o-soggetto-emittente-list-loader.component.html',
	styleUrls: ['./terzo-intermediario-o-soggetto-emittente-list-loader.component.scss']
})
export class AigTerzoIntermediarioOSoggettoEmittenteListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigTerzoIntermediarioOSoggettoEmittenteResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllTerzoIntermediarioOSoggettoEmittentesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countTerzoIntermediarioOSoggettoEmittentesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

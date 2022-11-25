import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiVeicoliDTO } from '../../../class/dati-veicoli-dto.class';
import { AigDatiVeicoliResourceService } from '../../../services/dati-veicoli.service';

@Component({
	selector: 'aig-dati-veicoli-list-loader',
	templateUrl: './dati-veicoli-list-loader.component.html',
	styleUrls: ['./dati-veicoli-list-loader.component.scss']
})
export class AigDatiVeicoliListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiVeicoliResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiVeicolisUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiVeicolisUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

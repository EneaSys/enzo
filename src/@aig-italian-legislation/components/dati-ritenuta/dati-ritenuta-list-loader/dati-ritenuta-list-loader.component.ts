import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiRitenutaDTO } from '../../../class/dati-ritenuta-dto.class';
import { AigDatiRitenutaResourceService } from '../../../services/dati-ritenuta.service';

@Component({
	selector: 'aig-dati-ritenuta-list-loader',
	templateUrl: './dati-ritenuta-list-loader.component.html',
	styleUrls: ['./dati-ritenuta-list-loader.component.scss']
})
export class AigDatiRitenutaListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiRitenutaResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiRitenutasUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiRitenutasUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

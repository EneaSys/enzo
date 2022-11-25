import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiBolloDTO } from '../../../class/dati-bollo-dto.class';
import { AigDatiBolloResourceService } from '../../../services/dati-bollo.service';

@Component({
	selector: 'aig-dati-bollo-list-loader',
	templateUrl: './dati-bollo-list-loader.component.html',
	styleUrls: ['./dati-bollo-list-loader.component.scss']
})
export class AigDatiBolloListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiBolloResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiBollosUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiBollosUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

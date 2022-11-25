import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiTrasportoDTO } from '../../../class/dati-trasporto-dto.class';
import { AigDatiTrasportoResourceService } from '../../../services/dati-trasporto.service';

@Component({
	selector: 'aig-dati-trasporto-list-loader',
	templateUrl: './dati-trasporto-list-loader.component.html',
	styleUrls: ['./dati-trasporto-list-loader.component.scss']
})
export class AigDatiTrasportoListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiTrasportoResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiTrasportosUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiTrasportosUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

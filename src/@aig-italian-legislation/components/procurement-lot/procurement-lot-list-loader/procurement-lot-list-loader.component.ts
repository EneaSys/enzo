import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigProcurementLotDTO } from '../../../class/procurement-lot-dto.class';
import { AigProcurementLotResourceService } from '../../../services/procurement-lot.service';

@Component({
	selector: 'aig-procurement-lot-list-loader',
	templateUrl: './procurement-lot-list-loader.component.html',
	styleUrls: ['./procurement-lot-list-loader.component.scss']
})
export class AigProcurementLotListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigProcurementLotResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllProcurementLotsUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countProcurementLotsUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

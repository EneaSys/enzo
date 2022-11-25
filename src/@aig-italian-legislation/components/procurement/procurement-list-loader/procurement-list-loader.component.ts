import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigProcurementDTO } from '../../../class/procurement-dto.class';
import { AigProcurementResourceService } from '../../../services/procurement.service';

@Component({
	selector: 'aig-procurement-list-loader',
	templateUrl: './procurement-list-loader.component.html',
	styleUrls: ['./procurement-list-loader.component.scss']
})
export class AigProcurementListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigProcurementResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllProcurementsUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countProcurementsUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

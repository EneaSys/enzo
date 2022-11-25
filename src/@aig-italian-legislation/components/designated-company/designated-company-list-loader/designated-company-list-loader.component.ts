import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDesignatedCompanyDTO } from '../../../class/designated-company-dto.class';
import { AigDesignatedCompanyResourceService } from '../../../services/designated-company.service';

@Component({
	selector: 'aig-designated-company-list-loader',
	templateUrl: './designated-company-list-loader.component.html',
	styleUrls: ['./designated-company-list-loader.component.scss']
})
export class AigDesignatedCompanyListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDesignatedCompanyResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDesignatedCompaniesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDesignatedCompaniesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigProcurementLotCategoryDTO } from '../../../class/procurement-lot-category-dto.class';
import { AigProcurementLotCategoryResourceService } from '../../../services/procurement-lot-category.service';

@Component({
	selector: 'aig-procurement-lot-category-list-loader',
	templateUrl: './procurement-lot-category-list-loader.component.html',
	styleUrls: ['./procurement-lot-category-list-loader.component.scss']
})
export class AigProcurementLotCategoryListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigProcurementLotCategoryResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllProcurementLotCategoriesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countProcurementLotCategoriesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

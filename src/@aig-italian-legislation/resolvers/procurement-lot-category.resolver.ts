import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigProcurementLotCategoryDTO } from '../class/procurement-lot-category-dto.class';
import { AigProcurementLotCategoryResourceService } from '../services/procurement-lot-category.service';

@Injectable()
export class AigProcurementLotCategoryResolver implements Resolve<Observable<AigProcurementLotCategoryDTO>> {
	constructor(private procurementLotCategoryResourceService: AigProcurementLotCategoryResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.procurementLotCategoryResourceService.getProcurementLotCategoryUsingGET(+id);
	}
}
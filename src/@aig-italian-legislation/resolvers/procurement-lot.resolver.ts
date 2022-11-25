import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigProcurementLotDTO } from '../class/procurement-lot-dto.class';
import { AigProcurementLotResourceService } from '../services/procurement-lot.service';

@Injectable()
export class AigProcurementLotResolver implements Resolve<Observable<AigProcurementLotDTO>> {
	constructor(private procurementLotResourceService: AigProcurementLotResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.procurementLotResourceService.getProcurementLotUsingGET(+id);
	}
}
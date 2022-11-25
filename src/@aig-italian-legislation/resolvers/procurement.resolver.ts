import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigProcurementDTO } from '../class/procurement-dto.class';
import { AigProcurementResourceService } from '../services/procurement.service';

@Injectable()
export class AigProcurementResolver implements Resolve<Observable<AigProcurementDTO>> {
	constructor(private procurementResourceService: AigProcurementResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.procurementResourceService.getProcurementUsingGET(+id);
	}
}
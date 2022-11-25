import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigPreparationStatusDTO } from '../class/preparation-status-dto.class';
import { AigPreparationStatusResourceService } from '../services/preparation-status.service';

@Injectable()
export class AigPreparationStatusResolver implements Resolve<Observable<AigPreparationStatusDTO>> {
	constructor(private preparationStatusResourceService: AigPreparationStatusResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.preparationStatusResourceService.getPreparationStatusUsingGET(+id);
	}
}
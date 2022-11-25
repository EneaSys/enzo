import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigPreparationDTO } from '../class/preparation-dto.class';
import { AigPreparationResourceService } from '../services/preparation.service';

@Injectable()
export class AigPreparationResolver implements Resolve<Observable<AigPreparationDTO>> {
	constructor(private preparationResourceService: AigPreparationResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.preparationResourceService.getPreparationUsingGET(+id);
	}
}
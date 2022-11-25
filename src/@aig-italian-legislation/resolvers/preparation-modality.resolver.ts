import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigPreparationModalityDTO } from '../class/preparation-modality-dto.class';
import { AigPreparationModalityResourceService } from '../services/preparation-modality.service';

@Injectable()
export class AigPreparationModalityResolver implements Resolve<Observable<AigPreparationModalityDTO>> {
	constructor(private preparationModalityResourceService: AigPreparationModalityResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.preparationModalityResourceService.getPreparationModalityUsingGET(+id);
	}
}
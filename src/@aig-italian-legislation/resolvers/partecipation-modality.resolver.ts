import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigPartecipationModalityDTO } from '../class/partecipation-modality-dto.class';
import { AigPartecipationModalityResourceService } from '../services/partecipation-modality.service';

@Injectable()
export class AigPartecipationModalityResolver implements Resolve<Observable<AigPartecipationModalityDTO>> {
	constructor(private partecipationModalityResourceService: AigPartecipationModalityResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.partecipationModalityResourceService.getPartecipationModalityUsingGET(+id);
	}
}
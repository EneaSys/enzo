import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigPartecipationDTO } from '../class/partecipation-dto.class';
import { AigPartecipationResourceService } from '../services/partecipation.service';

@Injectable()
export class AigPartecipationResolver implements Resolve<Observable<AigPartecipationDTO>> {
	constructor(private partecipationResourceService: AigPartecipationResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.partecipationResourceService.getPartecipationUsingGET(+id);
	}
}
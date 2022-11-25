import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigPartecipationStatusDTO } from '../class/partecipation-status-dto.class';
import { AigPartecipationStatusResourceService } from '../services/partecipation-status.service';

@Injectable()
export class AigPartecipationStatusResolver implements Resolve<Observable<AigPartecipationStatusDTO>> {
	constructor(private partecipationStatusResourceService: AigPartecipationStatusResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.partecipationStatusResourceService.getPartecipationStatusUsingGET(+id);
	}
}
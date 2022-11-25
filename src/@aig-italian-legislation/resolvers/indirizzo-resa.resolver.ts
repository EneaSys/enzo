import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigIndirizzoResaDTO } from '../class/indirizzo-resa-dto.class';
import { AigIndirizzoResaResourceService } from '../services/indirizzo-resa.service';

@Injectable()
export class AigIndirizzoResaResolver implements Resolve<Observable<AigIndirizzoResaDTO>> {
	constructor(private indirizzoResaResourceService: AigIndirizzoResaResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.indirizzoResaResourceService.getIndirizzoResaUsingGET(+id);
	}
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigRappresentanteFiscaleDTO } from '../class/rappresentante-fiscale-dto.class';
import { AigRappresentanteFiscaleResourceService } from '../services/rappresentante-fiscale.service';

@Injectable()
export class AigRappresentanteFiscaleResolver implements Resolve<Observable<AigRappresentanteFiscaleDTO>> {
	constructor(private rappresentanteFiscaleResourceService: AigRappresentanteFiscaleResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.rappresentanteFiscaleResourceService.getRappresentanteFiscaleUsingGET(+id);
	}
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigRiferimentoNumeroLineaDTO } from '../class/riferimento-numero-linea-dto.class';
import { AigRiferimentoNumeroLineaResourceService } from '../services/riferimento-numero-linea.service';

@Injectable()
export class AigRiferimentoNumeroLineaResolver implements Resolve<Observable<AigRiferimentoNumeroLineaDTO>> {
	constructor(private riferimentoNumeroLineaResourceService: AigRiferimentoNumeroLineaResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.riferimentoNumeroLineaResourceService.getRiferimentoNumeroLineaUsingGET(+id);
	}
}
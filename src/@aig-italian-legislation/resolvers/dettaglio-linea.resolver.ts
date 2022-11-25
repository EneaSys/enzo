import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDettaglioLineaDTO } from '../class/dettaglio-linea-dto.class';
import { AigDettaglioLineaResourceService } from '../services/dettaglio-linea.service';

@Injectable()
export class AigDettaglioLineaResolver implements Resolve<Observable<AigDettaglioLineaDTO>> {
	constructor(private dettaglioLineaResourceService: AigDettaglioLineaResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.dettaglioLineaResourceService.getDettaglioLineaUsingGET(+id);
	}
}
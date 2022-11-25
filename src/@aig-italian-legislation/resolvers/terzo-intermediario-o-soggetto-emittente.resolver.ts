import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigTerzoIntermediarioOSoggettoEmittenteDTO } from '../class/terzo-intermediario-o-soggetto-emittente-dto.class';
import { AigTerzoIntermediarioOSoggettoEmittenteResourceService } from '../services/terzo-intermediario-o-soggetto-emittente.service';

@Injectable()
export class AigTerzoIntermediarioOSoggettoEmittenteResolver implements Resolve<Observable<AigTerzoIntermediarioOSoggettoEmittenteDTO>> {
	constructor(private terzoIntermediarioOSoggettoEmittenteResourceService: AigTerzoIntermediarioOSoggettoEmittenteResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.terzoIntermediarioOSoggettoEmittenteResourceService.getTerzoIntermediarioOSoggettoEmittenteUsingGET(+id);
	}
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigSoggettoEmittenteDTO } from '../class/soggetto-emittente-dto.class';
import { AigSoggettoEmittenteResourceService } from '../services/soggetto-emittente.service';

@Injectable()
export class AigSoggettoEmittenteResolver implements Resolve<Observable<AigSoggettoEmittenteDTO>> {
	constructor(private soggettoEmittenteResourceService: AigSoggettoEmittenteResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.soggettoEmittenteResourceService.getSoggettoEmittenteUsingGET(+id);
	}
}
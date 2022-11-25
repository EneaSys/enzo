import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigCessionarioCommittenteDTO } from '../class/cessionario-committente-dto.class';
import { AigCessionarioCommittenteResourceService } from '../services/cessionario-committente.service';

@Injectable()
export class AigCessionarioCommittenteResolver implements Resolve<Observable<AigCessionarioCommittenteDTO>> {
	constructor(private cessionarioCommittenteResourceService: AigCessionarioCommittenteResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.cessionarioCommittenteResourceService.getCessionarioCommittenteUsingGET(+id);
	}
}
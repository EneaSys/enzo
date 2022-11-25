import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiContrattoDTO } from '../class/dati-contratto-dto.class';
import { AigDatiContrattoResourceService } from '../services/dati-contratto.service';

@Injectable()
export class AigDatiContrattoResolver implements Resolve<Observable<AigDatiContrattoDTO>> {
	constructor(private datiContrattoResourceService: AigDatiContrattoResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiContrattoResourceService.getDatiContrattoUsingGET(+id);
	}
}
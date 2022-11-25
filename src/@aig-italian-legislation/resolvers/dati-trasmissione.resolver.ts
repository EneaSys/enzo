import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiTrasmissioneDTO } from '../class/dati-trasmissione-dto.class';
import { AigDatiTrasmissioneResourceService } from '../services/dati-trasmissione.service';

@Injectable()
export class AigDatiTrasmissioneResolver implements Resolve<Observable<AigDatiTrasmissioneDTO>> {
	constructor(private datiTrasmissioneResourceService: AigDatiTrasmissioneResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiTrasmissioneResourceService.getDatiTrasmissioneUsingGET(+id);
	}
}
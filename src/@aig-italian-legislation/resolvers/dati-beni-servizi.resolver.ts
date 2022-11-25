import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiBeniServiziDTO } from '../class/dati-beni-servizi-dto.class';
import { AigDatiBeniServiziResourceService } from '../services/dati-beni-servizi.service';

@Injectable()
export class AigDatiBeniServiziResolver implements Resolve<Observable<AigDatiBeniServiziDTO>> {
	constructor(private datiBeniServiziResourceService: AigDatiBeniServiziResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiBeniServiziResourceService.getDatiBeniServiziUsingGET(+id);
	}
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiCassaPrevidenzialeDTO } from '../class/dati-cassa-previdenziale-dto.class';
import { AigDatiCassaPrevidenzialeResourceService } from '../services/dati-cassa-previdenziale.service';

@Injectable()
export class AigDatiCassaPrevidenzialeResolver implements Resolve<Observable<AigDatiCassaPrevidenzialeDTO>> {
	constructor(private datiCassaPrevidenzialeResourceService: AigDatiCassaPrevidenzialeResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiCassaPrevidenzialeResourceService.getDatiCassaPrevidenzialeUsingGET(+id);
	}
}
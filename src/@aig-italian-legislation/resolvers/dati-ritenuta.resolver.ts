import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiRitenutaDTO } from '../class/dati-ritenuta-dto.class';
import { AigDatiRitenutaResourceService } from '../services/dati-ritenuta.service';

@Injectable()
export class AigDatiRitenutaResolver implements Resolve<Observable<AigDatiRitenutaDTO>> {
	constructor(private datiRitenutaResourceService: AigDatiRitenutaResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiRitenutaResourceService.getDatiRitenutaUsingGET(+id);
	}
}
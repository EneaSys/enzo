import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiVeicoliDTO } from '../class/dati-veicoli-dto.class';
import { AigDatiVeicoliResourceService } from '../services/dati-veicoli.service';

@Injectable()
export class AigDatiVeicoliResolver implements Resolve<Observable<AigDatiVeicoliDTO>> {
	constructor(private datiVeicoliResourceService: AigDatiVeicoliResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiVeicoliResourceService.getDatiVeicoliUsingGET(+id);
	}
}
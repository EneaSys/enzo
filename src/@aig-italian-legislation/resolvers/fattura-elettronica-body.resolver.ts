import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigFatturaElettronicaBodyDTO } from '../class/fattura-elettronica-body-dto.class';
import { AigFatturaElettronicaBodyResourceService } from '../services/fattura-elettronica-body.service';

@Injectable()
export class AigFatturaElettronicaBodyResolver implements Resolve<Observable<AigFatturaElettronicaBodyDTO>> {
	constructor(private fatturaElettronicaBodyResourceService: AigFatturaElettronicaBodyResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.fatturaElettronicaBodyResourceService.getFatturaElettronicaBodyUsingGET(+id);
	}
}
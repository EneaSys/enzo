import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigFatturaElettronicaHeaderDTO } from '../class/fattura-elettronica-header-dto.class';
import { AigFatturaElettronicaHeaderResourceService } from '../services/fattura-elettronica-header.service';

@Injectable()
export class AigFatturaElettronicaHeaderResolver implements Resolve<Observable<AigFatturaElettronicaHeaderDTO>> {
	constructor(private fatturaElettronicaHeaderResourceService: AigFatturaElettronicaHeaderResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.fatturaElettronicaHeaderResourceService.getFatturaElettronicaHeaderUsingGET(+id);
	}
}
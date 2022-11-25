import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiGeneraliDTO } from '../class/dati-generali-dto.class';
import { AigDatiGeneraliResourceService } from '../services/dati-generali.service';

@Injectable()
export class AigDatiGeneraliResolver implements Resolve<Observable<AigDatiGeneraliDTO>> {
	constructor(private datiGeneraliResourceService: AigDatiGeneraliResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiGeneraliResourceService.getDatiGeneraliUsingGET(+id);
	}
}
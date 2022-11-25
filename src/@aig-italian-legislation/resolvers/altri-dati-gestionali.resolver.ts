import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigAltriDatiGestionaliDTO } from '../class/altri-dati-gestionali-dto.class';
import { AigAltriDatiGestionaliResourceService } from '../services/altri-dati-gestionali.service';

@Injectable()
export class AigAltriDatiGestionaliResolver implements Resolve<Observable<AigAltriDatiGestionaliDTO>> {
	constructor(private altriDatiGestionaliResourceService: AigAltriDatiGestionaliResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.altriDatiGestionaliResourceService.getAltriDatiGestionaliUsingGET(+id);
	}
}
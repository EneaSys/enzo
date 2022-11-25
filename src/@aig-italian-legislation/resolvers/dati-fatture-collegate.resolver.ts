import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiFattureCollegateDTO } from '../class/dati-fatture-collegate-dto.class';
import { AigDatiFattureCollegateResourceService } from '../services/dati-fatture-collegate.service';

@Injectable()
export class AigDatiFattureCollegateResolver implements Resolve<Observable<AigDatiFattureCollegateDTO>> {
	constructor(private datiFattureCollegateResourceService: AigDatiFattureCollegateResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiFattureCollegateResourceService.getDatiFattureCollegateUsingGET(+id);
	}
}
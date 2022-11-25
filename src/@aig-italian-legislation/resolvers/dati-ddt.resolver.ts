import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiDdtDTO } from '../class/dati-ddt-dto.class';
import { AigDatiDdtResourceService } from '../services/dati-ddt.service';

@Injectable()
export class AigDatiDdtResolver implements Resolve<Observable<AigDatiDdtDTO>> {
	constructor(private datiDdtResourceService: AigDatiDdtResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiDdtResourceService.getDatiDdtUsingGET(+id);
	}
}
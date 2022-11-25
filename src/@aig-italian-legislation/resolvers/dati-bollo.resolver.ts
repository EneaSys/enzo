import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiBolloDTO } from '../class/dati-bollo-dto.class';
import { AigDatiBolloResourceService } from '../services/dati-bollo.service';

@Injectable()
export class AigDatiBolloResolver implements Resolve<Observable<AigDatiBolloDTO>> {
	constructor(private datiBolloResourceService: AigDatiBolloResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiBolloResourceService.getDatiBolloUsingGET(+id);
	}
}
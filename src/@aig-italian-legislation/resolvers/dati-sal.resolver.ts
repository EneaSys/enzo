import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiSalDTO } from '../class/dati-sal-dto.class';
import { AigDatiSalResourceService } from '../services/dati-sal.service';

@Injectable()
export class AigDatiSalResolver implements Resolve<Observable<AigDatiSalDTO>> {
	constructor(private datiSalResourceService: AigDatiSalResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiSalResourceService.getDatiSalUsingGET(+id);
	}
}
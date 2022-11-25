import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiTrasportoDTO } from '../class/dati-trasporto-dto.class';
import { AigDatiTrasportoResourceService } from '../services/dati-trasporto.service';

@Injectable()
export class AigDatiTrasportoResolver implements Resolve<Observable<AigDatiTrasportoDTO>> {
	constructor(private datiTrasportoResourceService: AigDatiTrasportoResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiTrasportoResourceService.getDatiTrasportoUsingGET(+id);
	}
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiOrdineAcquistoDTO } from '../class/dati-ordine-acquisto-dto.class';
import { AigDatiOrdineAcquistoResourceService } from '../services/dati-ordine-acquisto.service';

@Injectable()
export class AigDatiOrdineAcquistoResolver implements Resolve<Observable<AigDatiOrdineAcquistoDTO>> {
	constructor(private datiOrdineAcquistoResourceService: AigDatiOrdineAcquistoResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiOrdineAcquistoResourceService.getDatiOrdineAcquistoUsingGET(+id);
	}
}
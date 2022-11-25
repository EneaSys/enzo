import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiGeneraliDocumentoDTO } from '../class/dati-generali-documento-dto.class';
import { AigDatiGeneraliDocumentoResourceService } from '../services/dati-generali-documento.service';

@Injectable()
export class AigDatiGeneraliDocumentoResolver implements Resolve<Observable<AigDatiGeneraliDocumentoDTO>> {
	constructor(private datiGeneraliDocumentoResourceService: AigDatiGeneraliDocumentoResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiGeneraliDocumentoResourceService.getDatiGeneraliDocumentoUsingGET(+id);
	}
}
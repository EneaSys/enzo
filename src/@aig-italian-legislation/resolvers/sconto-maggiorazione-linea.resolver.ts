import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigScontoMaggiorazioneLineaDTO } from '../class/sconto-maggiorazione-linea-dto.class';
import { AigScontoMaggiorazioneLineaResourceService } from '../services/sconto-maggiorazione-linea.service';

@Injectable()
export class AigScontoMaggiorazioneLineaResolver implements Resolve<Observable<AigScontoMaggiorazioneLineaDTO>> {
	constructor(private scontoMaggiorazioneLineaResourceService: AigScontoMaggiorazioneLineaResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.scontoMaggiorazioneLineaResourceService.getScontoMaggiorazioneLineaUsingGET(+id);
	}
}
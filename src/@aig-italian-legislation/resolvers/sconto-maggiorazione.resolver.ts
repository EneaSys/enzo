import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigScontoMaggiorazioneDTO } from '../class/sconto-maggiorazione-dto.class';
import { AigScontoMaggiorazioneResourceService } from '../services/sconto-maggiorazione.service';

@Injectable()
export class AigScontoMaggiorazioneResolver implements Resolve<Observable<AigScontoMaggiorazioneDTO>> {
	constructor(private scontoMaggiorazioneResourceService: AigScontoMaggiorazioneResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.scontoMaggiorazioneResourceService.getScontoMaggiorazioneUsingGET(+id);
	}
}
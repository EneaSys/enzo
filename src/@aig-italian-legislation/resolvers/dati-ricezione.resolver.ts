import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiRicezioneDTO } from '../class/dati-ricezione-dto.class';
import { AigDatiRicezioneResourceService } from '../services/dati-ricezione.service';

@Injectable()
export class AigDatiRicezioneResolver implements Resolve<Observable<AigDatiRicezioneDTO>> {
	constructor(private datiRicezioneResourceService: AigDatiRicezioneResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiRicezioneResourceService.getDatiRicezioneUsingGET(+id);
	}
}
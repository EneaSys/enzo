import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiConvenzioneDTO } from '../class/dati-convenzione-dto.class';
import { AigDatiConvenzioneResourceService } from '../services/dati-convenzione.service';

@Injectable()
export class AigDatiConvenzioneResolver implements Resolve<Observable<AigDatiConvenzioneDTO>> {
	constructor(private datiConvenzioneResourceService: AigDatiConvenzioneResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiConvenzioneResourceService.getDatiConvenzioneUsingGET(+id);
	}
}
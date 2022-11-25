import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDossierDTO } from '../class/dossier-dto.class';
import { AigDossierResourceService } from '../services/dossier.service';

@Injectable()
export class AigDossierResolver implements Resolve<Observable<AigDossierDTO>> {
	constructor(private dossierResourceService: AigDossierResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.dossierResourceService.getDossierUsingGET(+id);
	}
}
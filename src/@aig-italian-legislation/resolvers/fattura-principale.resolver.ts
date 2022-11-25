import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigFatturaPrincipaleDTO } from '../class/fattura-principale-dto.class';
import { AigFatturaPrincipaleResourceService } from '../services/fattura-principale.service';

@Injectable()
export class AigFatturaPrincipaleResolver implements Resolve<Observable<AigFatturaPrincipaleDTO>> {
	constructor(private fatturaPrincipaleResourceService: AigFatturaPrincipaleResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.fatturaPrincipaleResourceService.getFatturaPrincipaleUsingGET(+id);
	}
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigAllegatiDTO } from '../class/allegati-dto.class';
import { AigAllegatiResourceService } from '../services/allegati.service';

@Injectable()
export class AigAllegatiResolver implements Resolve<Observable<AigAllegatiDTO>> {
	constructor(private allegatiResourceService: AigAllegatiResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.allegatiResourceService.getAllegatiUsingGET(+id);
	}
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigCedentePrestatoreDTO } from '../class/cedente-prestatore-dto.class';
import { AigCedentePrestatoreResourceService } from '../services/cedente-prestatore.service';

@Injectable()
export class AigCedentePrestatoreResolver implements Resolve<Observable<AigCedentePrestatoreDTO>> {
	constructor(private cedentePrestatoreResourceService: AigCedentePrestatoreResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.cedentePrestatoreResourceService.getCedentePrestatoreUsingGET(+id);
	}
}
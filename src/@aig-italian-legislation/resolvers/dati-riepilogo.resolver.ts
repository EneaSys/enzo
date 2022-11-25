import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiRiepilogoDTO } from '../class/dati-riepilogo-dto.class';
import { AigDatiRiepilogoResourceService } from '../services/dati-riepilogo.service';

@Injectable()
export class AigDatiRiepilogoResolver implements Resolve<Observable<AigDatiRiepilogoDTO>> {
	constructor(private datiRiepilogoResourceService: AigDatiRiepilogoResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiRiepilogoResourceService.getDatiRiepilogoUsingGET(+id);
	}
}
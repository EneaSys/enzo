import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDatiPagamentoDTO } from '../class/dati-pagamento-dto.class';
import { AigDatiPagamentoResourceService } from '../services/dati-pagamento.service';

@Injectable()
export class AigDatiPagamentoResolver implements Resolve<Observable<AigDatiPagamentoDTO>> {
	constructor(private datiPagamentoResourceService: AigDatiPagamentoResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.datiPagamentoResourceService.getDatiPagamentoUsingGET(+id);
	}
}
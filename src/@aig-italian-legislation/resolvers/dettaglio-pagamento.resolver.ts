import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDettaglioPagamentoDTO } from '../class/dettaglio-pagamento-dto.class';
import { AigDettaglioPagamentoResourceService } from '../services/dettaglio-pagamento.service';

@Injectable()
export class AigDettaglioPagamentoResolver implements Resolve<Observable<AigDettaglioPagamentoDTO>> {
	constructor(private dettaglioPagamentoResourceService: AigDettaglioPagamentoResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.dettaglioPagamentoResourceService.getDettaglioPagamentoUsingGET(+id);
	}
}
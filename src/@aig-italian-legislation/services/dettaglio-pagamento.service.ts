import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDettaglioPagamentoDTO } from '../class/dettaglio-pagamento-dto.class';

@Injectable()
export class AigDettaglioPagamentoResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDettaglioPagamentoUsingGET(id: number): Observable<AigDettaglioPagamentoDTO> {
		return this.http.get<AigDettaglioPagamentoDTO>("url");
	}

	getAllDettaglioPagamentosUsingGET(filters: any): Observable<AigDettaglioPagamentoDTO[]> {
		return this.http.get<AigDettaglioPagamentoDTO[]>("url");
	}
	
	countDettaglioPagamentosUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
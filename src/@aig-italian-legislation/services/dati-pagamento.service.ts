import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiPagamentoDTO } from '../class/dati-pagamento-dto.class';

@Injectable()
export class AigDatiPagamentoResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiPagamentoUsingGET(id: number): Observable<AigDatiPagamentoDTO> {
		return this.http.get<AigDatiPagamentoDTO>("url");
	}

	getAllDatiPagamentosUsingGET(filters: any): Observable<AigDatiPagamentoDTO[]> {
		return this.http.get<AigDatiPagamentoDTO[]>("url");
	}
	
	countDatiPagamentosUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
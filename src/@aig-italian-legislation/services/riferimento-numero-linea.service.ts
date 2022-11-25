import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigRiferimentoNumeroLineaDTO } from '../class/riferimento-numero-linea-dto.class';

@Injectable()
export class AigRiferimentoNumeroLineaResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getRiferimentoNumeroLineaUsingGET(id: number): Observable<AigRiferimentoNumeroLineaDTO> {
		return this.http.get<AigRiferimentoNumeroLineaDTO>("url");
	}

	getAllRiferimentoNumeroLineasUsingGET(filters: any): Observable<AigRiferimentoNumeroLineaDTO[]> {
		return this.http.get<AigRiferimentoNumeroLineaDTO[]>("url");
	}
	
	countRiferimentoNumeroLineasUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
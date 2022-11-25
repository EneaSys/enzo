import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDettaglioLineaDTO } from '../class/dettaglio-linea-dto.class';

@Injectable()
export class AigDettaglioLineaResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDettaglioLineaUsingGET(id: number): Observable<AigDettaglioLineaDTO> {
		return this.http.get<AigDettaglioLineaDTO>("url");
	}

	getAllDettaglioLineasUsingGET(filters: any): Observable<AigDettaglioLineaDTO[]> {
		return this.http.get<AigDettaglioLineaDTO[]>("url");
	}
	
	countDettaglioLineasUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
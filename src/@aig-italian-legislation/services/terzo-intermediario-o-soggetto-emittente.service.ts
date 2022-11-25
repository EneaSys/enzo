import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigTerzoIntermediarioOSoggettoEmittenteDTO } from '../class/terzo-intermediario-o-soggetto-emittente-dto.class';

@Injectable()
export class AigTerzoIntermediarioOSoggettoEmittenteResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getTerzoIntermediarioOSoggettoEmittenteUsingGET(id: number): Observable<AigTerzoIntermediarioOSoggettoEmittenteDTO> {
		return this.http.get<AigTerzoIntermediarioOSoggettoEmittenteDTO>("url");
	}

	getAllTerzoIntermediarioOSoggettoEmittentesUsingGET(filters: any): Observable<AigTerzoIntermediarioOSoggettoEmittenteDTO[]> {
		return this.http.get<AigTerzoIntermediarioOSoggettoEmittenteDTO[]>("url");
	}
	
	countTerzoIntermediarioOSoggettoEmittentesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
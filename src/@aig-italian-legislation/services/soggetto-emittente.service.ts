import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigSoggettoEmittenteDTO } from '../class/soggetto-emittente-dto.class';

@Injectable()
export class AigSoggettoEmittenteResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getSoggettoEmittenteUsingGET(id: number): Observable<AigSoggettoEmittenteDTO> {
		return this.http.get<AigSoggettoEmittenteDTO>("url");
	}

	getAllSoggettoEmittentesUsingGET(filters: any): Observable<AigSoggettoEmittenteDTO[]> {
		return this.http.get<AigSoggettoEmittenteDTO[]>("url");
	}
	
	countSoggettoEmittentesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
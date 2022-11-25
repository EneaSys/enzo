import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiContrattoDTO } from '../class/dati-contratto-dto.class';

@Injectable()
export class AigDatiContrattoResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiContrattoUsingGET(id: number): Observable<AigDatiContrattoDTO> {
		return this.http.get<AigDatiContrattoDTO>("url");
	}

	getAllDatiContrattosUsingGET(filters: any): Observable<AigDatiContrattoDTO[]> {
		return this.http.get<AigDatiContrattoDTO[]>("url");
	}
	
	countDatiContrattosUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigCessionarioCommittenteDTO } from '../class/cessionario-committente-dto.class';

@Injectable()
export class AigCessionarioCommittenteResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getCessionarioCommittenteUsingGET(id: number): Observable<AigCessionarioCommittenteDTO> {
		return this.http.get<AigCessionarioCommittenteDTO>("url");
	}

	getAllCessionarioCommittentesUsingGET(filters: any): Observable<AigCessionarioCommittenteDTO[]> {
		return this.http.get<AigCessionarioCommittenteDTO[]>("url");
	}
	
	countCessionarioCommittentesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
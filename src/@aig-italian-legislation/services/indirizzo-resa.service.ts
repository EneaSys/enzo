import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigIndirizzoResaDTO } from '../class/indirizzo-resa-dto.class';

@Injectable()
export class AigIndirizzoResaResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getIndirizzoResaUsingGET(id: number): Observable<AigIndirizzoResaDTO> {
		return this.http.get<AigIndirizzoResaDTO>("url");
	}

	getAllIndirizzoResasUsingGET(filters: any): Observable<AigIndirizzoResaDTO[]> {
		return this.http.get<AigIndirizzoResaDTO[]>("url");
	}
	
	countIndirizzoResasUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
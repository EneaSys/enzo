import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiGeneraliDTO } from '../class/dati-generali-dto.class';

@Injectable()
export class AigDatiGeneraliResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiGeneraliUsingGET(id: number): Observable<AigDatiGeneraliDTO> {
		return this.http.get<AigDatiGeneraliDTO>("url");
	}

	getAllDatiGeneralisUsingGET(filters: any): Observable<AigDatiGeneraliDTO[]> {
		return this.http.get<AigDatiGeneraliDTO[]>("url");
	}
	
	countDatiGeneralisUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
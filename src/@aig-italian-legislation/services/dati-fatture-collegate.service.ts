import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiFattureCollegateDTO } from '../class/dati-fatture-collegate-dto.class';

@Injectable()
export class AigDatiFattureCollegateResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiFattureCollegateUsingGET(id: number): Observable<AigDatiFattureCollegateDTO> {
		return this.http.get<AigDatiFattureCollegateDTO>("url");
	}

	getAllDatiFattureCollegatesUsingGET(filters: any): Observable<AigDatiFattureCollegateDTO[]> {
		return this.http.get<AigDatiFattureCollegateDTO[]>("url");
	}
	
	countDatiFattureCollegatesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
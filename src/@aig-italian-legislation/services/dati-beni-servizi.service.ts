import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiBeniServiziDTO } from '../class/dati-beni-servizi-dto.class';

@Injectable()
export class AigDatiBeniServiziResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiBeniServiziUsingGET(id: number): Observable<AigDatiBeniServiziDTO> {
		return this.http.get<AigDatiBeniServiziDTO>("url");
	}

	getAllDatiBeniServizisUsingGET(filters: any): Observable<AigDatiBeniServiziDTO[]> {
		return this.http.get<AigDatiBeniServiziDTO[]>("url");
	}
	
	countDatiBeniServizisUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
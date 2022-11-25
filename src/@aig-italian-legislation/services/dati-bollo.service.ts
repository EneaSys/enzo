import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiBolloDTO } from '../class/dati-bollo-dto.class';

@Injectable()
export class AigDatiBolloResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiBolloUsingGET(id: number): Observable<AigDatiBolloDTO> {
		return this.http.get<AigDatiBolloDTO>("url");
	}

	getAllDatiBollosUsingGET(filters: any): Observable<AigDatiBolloDTO[]> {
		return this.http.get<AigDatiBolloDTO[]>("url");
	}
	
	countDatiBollosUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
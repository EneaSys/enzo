import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiRitenutaDTO } from '../class/dati-ritenuta-dto.class';

@Injectable()
export class AigDatiRitenutaResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiRitenutaUsingGET(id: number): Observable<AigDatiRitenutaDTO> {
		return this.http.get<AigDatiRitenutaDTO>("url");
	}

	getAllDatiRitenutasUsingGET(filters: any): Observable<AigDatiRitenutaDTO[]> {
		return this.http.get<AigDatiRitenutaDTO[]>("url");
	}
	
	countDatiRitenutasUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
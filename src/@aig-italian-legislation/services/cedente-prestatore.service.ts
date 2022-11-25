import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigCedentePrestatoreDTO } from '../class/cedente-prestatore-dto.class';

@Injectable()
export class AigCedentePrestatoreResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getCedentePrestatoreUsingGET(id: number): Observable<AigCedentePrestatoreDTO> {
		return this.http.get<AigCedentePrestatoreDTO>("url");
	}

	getAllCedentePrestatoresUsingGET(filters: any): Observable<AigCedentePrestatoreDTO[]> {
		return this.http.get<AigCedentePrestatoreDTO[]>("url");
	}
	
	countCedentePrestatoresUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
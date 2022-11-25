import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiCassaPrevidenzialeDTO } from '../class/dati-cassa-previdenziale-dto.class';

@Injectable()
export class AigDatiCassaPrevidenzialeResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiCassaPrevidenzialeUsingGET(id: number): Observable<AigDatiCassaPrevidenzialeDTO> {
		return this.http.get<AigDatiCassaPrevidenzialeDTO>("url");
	}

	getAllDatiCassaPrevidenzialesUsingGET(filters: any): Observable<AigDatiCassaPrevidenzialeDTO[]> {
		return this.http.get<AigDatiCassaPrevidenzialeDTO[]>("url");
	}
	
	countDatiCassaPrevidenzialesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
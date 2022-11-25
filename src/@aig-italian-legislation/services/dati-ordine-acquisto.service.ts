import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiOrdineAcquistoDTO } from '../class/dati-ordine-acquisto-dto.class';

@Injectable()
export class AigDatiOrdineAcquistoResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiOrdineAcquistoUsingGET(id: number): Observable<AigDatiOrdineAcquistoDTO> {
		return this.http.get<AigDatiOrdineAcquistoDTO>("url");
	}

	getAllDatiOrdineAcquistosUsingGET(filters: any): Observable<AigDatiOrdineAcquistoDTO[]> {
		return this.http.get<AigDatiOrdineAcquistoDTO[]>("url");
	}
	
	countDatiOrdineAcquistosUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
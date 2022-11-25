import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiTrasmissioneDTO } from '../class/dati-trasmissione-dto.class';

@Injectable()
export class AigDatiTrasmissioneResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiTrasmissioneUsingGET(id: number): Observable<AigDatiTrasmissioneDTO> {
		return this.http.get<AigDatiTrasmissioneDTO>("url");
	}

	getAllDatiTrasmissionesUsingGET(filters: any): Observable<AigDatiTrasmissioneDTO[]> {
		return this.http.get<AigDatiTrasmissioneDTO[]>("url");
	}
	
	countDatiTrasmissionesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
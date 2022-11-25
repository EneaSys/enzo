import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiSalDTO } from '../class/dati-sal-dto.class';

@Injectable()
export class AigDatiSalResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiSalUsingGET(id: number): Observable<AigDatiSalDTO> {
		return this.http.get<AigDatiSalDTO>("url");
	}

	getAllDatiSalsUsingGET(filters: any): Observable<AigDatiSalDTO[]> {
		return this.http.get<AigDatiSalDTO[]>("url");
	}
	
	countDatiSalsUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
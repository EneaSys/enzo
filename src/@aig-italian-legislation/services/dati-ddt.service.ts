import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiDdtDTO } from '../class/dati-ddt-dto.class';

@Injectable()
export class AigDatiDdtResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiDdtUsingGET(id: number): Observable<AigDatiDdtDTO> {
		return this.http.get<AigDatiDdtDTO>("url");
	}

	getAllDatiDdtsUsingGET(filters: any): Observable<AigDatiDdtDTO[]> {
		return this.http.get<AigDatiDdtDTO[]>("url");
	}
	
	countDatiDdtsUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
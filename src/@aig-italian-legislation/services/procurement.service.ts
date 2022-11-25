import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigProcurementDTO } from '../class/procurement-dto.class';

@Injectable()
export class AigProcurementResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getProcurementUsingGET(id: number): Observable<AigProcurementDTO> {
		return this.http.get<AigProcurementDTO>("url");
	}

	getAllProcurementsUsingGET(filters: any): Observable<AigProcurementDTO[]> {
		return this.http.get<AigProcurementDTO[]>("url");
	}
	
	countProcurementsUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
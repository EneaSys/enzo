import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigProcurementLotDTO } from '../class/procurement-lot-dto.class';

@Injectable()
export class AigProcurementLotResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getProcurementLotUsingGET(id: number): Observable<AigProcurementLotDTO> {
		return this.http.get<AigProcurementLotDTO>("url");
	}

	getAllProcurementLotsUsingGET(filters: any): Observable<AigProcurementLotDTO[]> {
		return this.http.get<AigProcurementLotDTO[]>("url");
	}
	
	countProcurementLotsUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
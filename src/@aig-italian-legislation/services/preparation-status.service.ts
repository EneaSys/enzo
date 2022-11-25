import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigPreparationStatusDTO } from '../class/preparation-status-dto.class';

@Injectable()
export class AigPreparationStatusResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getPreparationStatusUsingGET(id: number): Observable<AigPreparationStatusDTO> {
		return this.http.get<AigPreparationStatusDTO>("url");
	}

	getAllPreparationStatusesUsingGET(filters: any): Observable<AigPreparationStatusDTO[]> {
		return this.http.get<AigPreparationStatusDTO[]>("url");
	}
	
	countPreparationStatusesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
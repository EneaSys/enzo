import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigPartecipationStatusDTO } from '../class/partecipation-status-dto.class';

@Injectable()
export class AigPartecipationStatusResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getPartecipationStatusUsingGET(id: number): Observable<AigPartecipationStatusDTO> {
		return this.http.get<AigPartecipationStatusDTO>("url");
	}

	getAllPartecipationStatusesUsingGET(filters: any): Observable<AigPartecipationStatusDTO[]> {
		return this.http.get<AigPartecipationStatusDTO[]>("url");
	}
	
	countPartecipationStatusesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
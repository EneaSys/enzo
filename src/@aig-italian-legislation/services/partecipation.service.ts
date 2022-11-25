import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigPartecipationDTO } from '../class/partecipation-dto.class';

@Injectable()
export class AigPartecipationResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getPartecipationUsingGET(id: number): Observable<AigPartecipationDTO> {
		return this.http.get<AigPartecipationDTO>("url");
	}

	getAllPartecipationsUsingGET(filters: any): Observable<AigPartecipationDTO[]> {
		return this.http.get<AigPartecipationDTO[]>("url");
	}
	
	countPartecipationsUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
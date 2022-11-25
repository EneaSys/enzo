import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigPartecipationModalityDTO } from '../class/partecipation-modality-dto.class';

@Injectable()
export class AigPartecipationModalityResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getPartecipationModalityUsingGET(id: number): Observable<AigPartecipationModalityDTO> {
		return this.http.get<AigPartecipationModalityDTO>("url");
	}

	getAllPartecipationModalitiesUsingGET(filters: any): Observable<AigPartecipationModalityDTO[]> {
		return this.http.get<AigPartecipationModalityDTO[]>("url");
	}
	
	countPartecipationModalitiesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
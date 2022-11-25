import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigPreparationModalityDTO } from '../class/preparation-modality-dto.class';

@Injectable()
export class AigPreparationModalityResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getPreparationModalityUsingGET(id: number): Observable<AigPreparationModalityDTO> {
		return this.http.get<AigPreparationModalityDTO>("url");
	}

	getAllPreparationModalitiesUsingGET(filters: any): Observable<AigPreparationModalityDTO[]> {
		return this.http.get<AigPreparationModalityDTO[]>("url");
	}
	
	countPreparationModalitiesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigPreparationDTO } from '../class/preparation-dto.class';

@Injectable()
export class AigPreparationResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getPreparationUsingGET(id: number): Observable<AigPreparationDTO> {
		return this.http.get<AigPreparationDTO>("url");
	}

	getAllPreparationsUsingGET(filters: any): Observable<AigPreparationDTO[]> {
		return this.http.get<AigPreparationDTO[]>("url");
	}
	
	countPreparationsUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
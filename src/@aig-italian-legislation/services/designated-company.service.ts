import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDesignatedCompanyDTO } from '../class/designated-company-dto.class';

@Injectable()
export class AigDesignatedCompanyResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDesignatedCompanyUsingGET(id: number): Observable<AigDesignatedCompanyDTO> {
		return this.http.get<AigDesignatedCompanyDTO>("url");
	}

	getAllDesignatedCompaniesUsingGET(filters: any): Observable<AigDesignatedCompanyDTO[]> {
		return this.http.get<AigDesignatedCompanyDTO[]>("url");
	}
	
	countDesignatedCompaniesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
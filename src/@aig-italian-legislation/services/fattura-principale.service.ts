import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigFatturaPrincipaleDTO } from '../class/fattura-principale-dto.class';

@Injectable()
export class AigFatturaPrincipaleResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getFatturaPrincipaleUsingGET(id: number): Observable<AigFatturaPrincipaleDTO> {
		return this.http.get<AigFatturaPrincipaleDTO>("url");
	}

	getAllFatturaPrincipalesUsingGET(filters: any): Observable<AigFatturaPrincipaleDTO[]> {
		return this.http.get<AigFatturaPrincipaleDTO[]>("url");
	}
	
	countFatturaPrincipalesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDossierDTO } from '../class/dossier-dto.class';

@Injectable()
export class AigDossierResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDossierUsingGET(id: number): Observable<AigDossierDTO> {
		return this.http.get<AigDossierDTO>("url");
	}

	getAllDossiersUsingGET(filters: any): Observable<AigDossierDTO[]> {
		return this.http.get<AigDossierDTO[]>("url");
	}
	
	countDossiersUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
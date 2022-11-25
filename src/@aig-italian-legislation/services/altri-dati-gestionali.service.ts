import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigAltriDatiGestionaliDTO } from '../class/altri-dati-gestionali-dto.class';

@Injectable()
export class AigAltriDatiGestionaliResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getAltriDatiGestionaliUsingGET(id: number): Observable<AigAltriDatiGestionaliDTO> {
		return this.http.get<AigAltriDatiGestionaliDTO>("url");
	}

	getAllAltriDatiGestionalisUsingGET(filters: any): Observable<AigAltriDatiGestionaliDTO[]> {
		return this.http.get<AigAltriDatiGestionaliDTO[]>("url");
	}
	
	countAltriDatiGestionalisUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
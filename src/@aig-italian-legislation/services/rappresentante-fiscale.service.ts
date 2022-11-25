import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigRappresentanteFiscaleDTO } from '../class/rappresentante-fiscale-dto.class';

@Injectable()
export class AigRappresentanteFiscaleResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getRappresentanteFiscaleUsingGET(id: number): Observable<AigRappresentanteFiscaleDTO> {
		return this.http.get<AigRappresentanteFiscaleDTO>("url");
	}

	getAllRappresentanteFiscalesUsingGET(filters: any): Observable<AigRappresentanteFiscaleDTO[]> {
		return this.http.get<AigRappresentanteFiscaleDTO[]>("url");
	}
	
	countRappresentanteFiscalesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
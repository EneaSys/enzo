import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiVeicoliDTO } from '../class/dati-veicoli-dto.class';

@Injectable()
export class AigDatiVeicoliResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiVeicoliUsingGET(id: number): Observable<AigDatiVeicoliDTO> {
		return this.http.get<AigDatiVeicoliDTO>("url");
	}

	getAllDatiVeicolisUsingGET(filters: any): Observable<AigDatiVeicoliDTO[]> {
		return this.http.get<AigDatiVeicoliDTO[]>("url");
	}
	
	countDatiVeicolisUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
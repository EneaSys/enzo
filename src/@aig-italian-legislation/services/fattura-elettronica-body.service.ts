import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigFatturaElettronicaBodyDTO } from '../class/fattura-elettronica-body-dto.class';

@Injectable()
export class AigFatturaElettronicaBodyResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getFatturaElettronicaBodyUsingGET(id: number): Observable<AigFatturaElettronicaBodyDTO> {
		return this.http.get<AigFatturaElettronicaBodyDTO>("url");
	}

	getAllFatturaElettronicaBodiesUsingGET(filters: any): Observable<AigFatturaElettronicaBodyDTO[]> {
		return this.http.get<AigFatturaElettronicaBodyDTO[]>("url");
	}
	
	countFatturaElettronicaBodiesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
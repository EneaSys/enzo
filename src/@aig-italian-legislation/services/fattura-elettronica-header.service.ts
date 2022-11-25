import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigFatturaElettronicaHeaderDTO } from '../class/fattura-elettronica-header-dto.class';

@Injectable()
export class AigFatturaElettronicaHeaderResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getFatturaElettronicaHeaderUsingGET(id: number): Observable<AigFatturaElettronicaHeaderDTO> {
		return this.http.get<AigFatturaElettronicaHeaderDTO>("url");
	}

	getAllFatturaElettronicaHeadersUsingGET(filters: any): Observable<AigFatturaElettronicaHeaderDTO[]> {
		return this.http.get<AigFatturaElettronicaHeaderDTO[]>("url");
	}
	
	countFatturaElettronicaHeadersUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
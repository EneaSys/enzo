import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiRicezioneDTO } from '../class/dati-ricezione-dto.class';

@Injectable()
export class AigDatiRicezioneResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiRicezioneUsingGET(id: number): Observable<AigDatiRicezioneDTO> {
		return this.http.get<AigDatiRicezioneDTO>("url");
	}

	getAllDatiRicezionesUsingGET(filters: any): Observable<AigDatiRicezioneDTO[]> {
		return this.http.get<AigDatiRicezioneDTO[]>("url");
	}
	
	countDatiRicezionesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
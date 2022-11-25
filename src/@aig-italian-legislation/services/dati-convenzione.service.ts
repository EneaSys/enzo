import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiConvenzioneDTO } from '../class/dati-convenzione-dto.class';

@Injectable()
export class AigDatiConvenzioneResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiConvenzioneUsingGET(id: number): Observable<AigDatiConvenzioneDTO> {
		return this.http.get<AigDatiConvenzioneDTO>("url");
	}

	getAllDatiConvenzionesUsingGET(filters: any): Observable<AigDatiConvenzioneDTO[]> {
		return this.http.get<AigDatiConvenzioneDTO[]>("url");
	}
	
	countDatiConvenzionesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
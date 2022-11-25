import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigScontoMaggiorazioneDTO } from '../class/sconto-maggiorazione-dto.class';

@Injectable()
export class AigScontoMaggiorazioneResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getScontoMaggiorazioneUsingGET(id: number): Observable<AigScontoMaggiorazioneDTO> {
		return this.http.get<AigScontoMaggiorazioneDTO>("url");
	}

	getAllScontoMaggiorazionesUsingGET(filters: any): Observable<AigScontoMaggiorazioneDTO[]> {
		return this.http.get<AigScontoMaggiorazioneDTO[]>("url");
	}
	
	countScontoMaggiorazionesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
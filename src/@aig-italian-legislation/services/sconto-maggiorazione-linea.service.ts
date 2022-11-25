import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigScontoMaggiorazioneLineaDTO } from '../class/sconto-maggiorazione-linea-dto.class';

@Injectable()
export class AigScontoMaggiorazioneLineaResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getScontoMaggiorazioneLineaUsingGET(id: number): Observable<AigScontoMaggiorazioneLineaDTO> {
		return this.http.get<AigScontoMaggiorazioneLineaDTO>("url");
	}

	getAllScontoMaggiorazioneLineasUsingGET(filters: any): Observable<AigScontoMaggiorazioneLineaDTO[]> {
		return this.http.get<AigScontoMaggiorazioneLineaDTO[]>("url");
	}
	
	countScontoMaggiorazioneLineasUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
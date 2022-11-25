import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiRiepilogoDTO } from '../class/dati-riepilogo-dto.class';

@Injectable()
export class AigDatiRiepilogoResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiRiepilogoUsingGET(id: number): Observable<AigDatiRiepilogoDTO> {
		return this.http.get<AigDatiRiepilogoDTO>("url");
	}

	getAllDatiRiepilogosUsingGET(filters: any): Observable<AigDatiRiepilogoDTO[]> {
		return this.http.get<AigDatiRiepilogoDTO[]>("url");
	}
	
	countDatiRiepilogosUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
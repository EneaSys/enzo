import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigAllegatiDTO } from '../class/allegati-dto.class';

@Injectable()
export class AigAllegatiResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getAllegatiUsingGET(id: number): Observable<AigAllegatiDTO> {
		return this.http.get<AigAllegatiDTO>("url");
	}

	getAllAllegatisUsingGET(filters: any): Observable<AigAllegatiDTO[]> {
		return this.http.get<AigAllegatiDTO[]>("url");
	}
	
	countAllegatisUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiTrasportoDTO } from '../class/dati-trasporto-dto.class';

@Injectable()
export class AigDatiTrasportoResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiTrasportoUsingGET(id: number): Observable<AigDatiTrasportoDTO> {
		return this.http.get<AigDatiTrasportoDTO>("url");
	}

	getAllDatiTrasportosUsingGET(filters: any): Observable<AigDatiTrasportoDTO[]> {
		return this.http.get<AigDatiTrasportoDTO[]>("url");
	}
	
	countDatiTrasportosUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigDatiGeneraliDocumentoDTO } from '../class/dati-generali-documento-dto.class';

@Injectable()
export class AigDatiGeneraliDocumentoResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getDatiGeneraliDocumentoUsingGET(id: number): Observable<AigDatiGeneraliDocumentoDTO> {
		return this.http.get<AigDatiGeneraliDocumentoDTO>("url");
	}

	getAllDatiGeneraliDocumentosUsingGET(filters: any): Observable<AigDatiGeneraliDocumentoDTO[]> {
		return this.http.get<AigDatiGeneraliDocumentoDTO[]>("url");
	}
	
	countDatiGeneraliDocumentosUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
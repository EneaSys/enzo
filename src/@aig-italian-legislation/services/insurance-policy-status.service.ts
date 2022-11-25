import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigInsurancePolicyStatusDTO } from '../class/insurance-policy-status-dto.class';

@Injectable()
export class AigInsurancePolicyStatusResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getInsurancePolicyStatusUsingGET(id: number): Observable<AigInsurancePolicyStatusDTO> {
		return this.http.get<AigInsurancePolicyStatusDTO>("url");
	}

	getAllInsurancePolicyStatusesUsingGET(filters: any): Observable<AigInsurancePolicyStatusDTO[]> {
		return this.http.get<AigInsurancePolicyStatusDTO[]>("url");
	}
	
	countInsurancePolicyStatusesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
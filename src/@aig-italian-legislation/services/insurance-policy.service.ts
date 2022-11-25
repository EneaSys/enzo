import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigInsurancePolicyDTO } from '../class/insurance-policy-dto.class';

@Injectable()
export class AigInsurancePolicyResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getInsurancePolicyUsingGET(id: number): Observable<AigInsurancePolicyDTO> {
		return this.http.get<AigInsurancePolicyDTO>("url");
	}

	getAllInsurancePoliciesUsingGET(filters: any): Observable<AigInsurancePolicyDTO[]> {
		return this.http.get<AigInsurancePolicyDTO[]>("url");
	}
	
	countInsurancePoliciesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
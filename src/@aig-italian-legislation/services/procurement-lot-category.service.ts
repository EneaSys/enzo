import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AigProcurementLotCategoryDTO } from '../class/procurement-lot-category-dto.class';

@Injectable()
export class AigProcurementLotCategoryResourceService {
	constructor(
		private http: HttpClient,

	) { }

	getProcurementLotCategoryUsingGET(id: number): Observable<AigProcurementLotCategoryDTO> {
		return this.http.get<AigProcurementLotCategoryDTO>("url");
	}

	getAllProcurementLotCategoriesUsingGET(filters: any): Observable<AigProcurementLotCategoryDTO[]> {
		return this.http.get<AigProcurementLotCategoryDTO[]>("url");
	}
	
	countProcurementLotCategoriesUsingGET(filters: any): Observable<number> {
		return this.http.get<number>("url");
	}
}
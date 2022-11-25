import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AigDesignatedCompanyDTO } from '../class/designated-company-dto.class';
import { AigDesignatedCompanyResourceService } from '../services/designated-company.service';

@Injectable()
export class AigDesignatedCompanyResolver implements Resolve<Observable<AigDesignatedCompanyDTO>> {
	constructor(private designatedCompanyResourceService: AigDesignatedCompanyResourceService) { }

	resolve(route: ActivatedRouteSnapshot) {
		var id = route.paramMap.get('id');
		if(id === null) throw new Error('Not valid Id');
		return this.designatedCompanyResourceService.getDesignatedCompanyUsingGET(+id);
	}
}
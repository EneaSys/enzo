import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProcurementLotCategoryDTO, ProcurementLotCategoryResourceService } from 'aig-italianlegislation';

@Injectable()
export class ProcurementLotCategoryResolver implements Resolve<Observable<ProcurementLotCategoryDTO>> {
    constructor(private resourceService: ProcurementLotCategoryResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getProcurementLotCategoryUsingGET(id);
    }
}
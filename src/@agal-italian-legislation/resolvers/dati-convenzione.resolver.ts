import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiConvenzioneDTO, DatiConvenzioneResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiConvenzioneResolver implements Resolve<Observable<DatiConvenzioneDTO>> {
    constructor(private resourceService: DatiConvenzioneResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiConvenzioneUsingGET(id);
    }
}
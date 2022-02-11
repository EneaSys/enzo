import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiRicezioneDTO, DatiRicezioneResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiRicezioneResolver implements Resolve<Observable<DatiRicezioneDTO>> {
    constructor(private resourceService: DatiRicezioneResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiRicezioneUsingGET(id);
    }
}
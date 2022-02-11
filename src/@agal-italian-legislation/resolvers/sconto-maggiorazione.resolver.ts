import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ScontoMaggiorazioneDTO, ScontoMaggiorazioneResourceService } from 'aig-italianlegislation';

@Injectable()
export class ScontoMaggiorazioneResolver implements Resolve<Observable<ScontoMaggiorazioneDTO>> {
    constructor(private resourceService: ScontoMaggiorazioneResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getScontoMaggiorazioneUsingGET(id);
    }
}
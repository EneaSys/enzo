import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ScontoMaggiorazioneLineaDTO, ScontoMaggiorazioneLineaResourceService } from 'aig-italianlegislation';

@Injectable()
export class ScontoMaggiorazioneLineaResolver implements Resolve<Observable<ScontoMaggiorazioneLineaDTO>> {
    constructor(private resourceService: ScontoMaggiorazioneLineaResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getScontoMaggiorazioneLineaUsingGET(id);
    }
}
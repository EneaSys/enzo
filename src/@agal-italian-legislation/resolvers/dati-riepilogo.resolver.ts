import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DatiRiepilogoDTO, DatiRiepilogoResourceService } from 'aig-italianlegislation';

@Injectable()
export class DatiRiepilogoResolver implements Resolve<Observable<DatiRiepilogoDTO>> {
    constructor(private resourceService: DatiRiepilogoResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getDatiRiepilogoUsingGET(id);
    }
}
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CessionarioCommittenteDTO, CessionarioCommittenteResourceService } from 'aig-italianlegislation';

@Injectable()
export class CessionarioCommittenteResolver implements Resolve<Observable<CessionarioCommittenteDTO>> {
    constructor(private resourceService: CessionarioCommittenteResourceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        var id: number = +route.paramMap.get('id');
        return this.resourceService.getCessionarioCommittenteUsingGET(id);
    }
}
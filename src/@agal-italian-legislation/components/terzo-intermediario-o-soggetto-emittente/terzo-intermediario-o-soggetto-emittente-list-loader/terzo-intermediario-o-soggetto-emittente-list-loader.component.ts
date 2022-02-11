import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { TerzoIntermediarioOSoggettoEmittenteResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-terzo-intermediario-o-soggetto-emittente-list-loader',
    templateUrl: './terzo-intermediario-o-soggetto-emittente-list-loader.component.html',
    styleUrls: ['./terzo-intermediario-o-soggetto-emittente-list-loader.component.scss']
})
export class AgalTerzoIntermediarioOSoggettoEmittenteListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: TerzoIntermediarioOSoggettoEmittenteResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllTerzoIntermediarioOSoggettoEmittentesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countTerzoIntermediarioOSoggettoEmittentesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

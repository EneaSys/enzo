import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { SoggettoEmittenteResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-soggetto-emittente-list-loader',
    templateUrl: './soggetto-emittente-list-loader.component.html',
    styleUrls: ['./soggetto-emittente-list-loader.component.scss']
})
export class AgalSoggettoEmittenteListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: SoggettoEmittenteResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllSoggettoEmittentesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countSoggettoEmittentesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

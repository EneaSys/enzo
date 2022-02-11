import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiContrattoResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-contratto-list-loader',
    templateUrl: './dati-contratto-list-loader.component.html',
    styleUrls: ['./dati-contratto-list-loader.component.scss']
})
export class AgalDatiContrattoListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiContrattoResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiContrattosUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiContrattosUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

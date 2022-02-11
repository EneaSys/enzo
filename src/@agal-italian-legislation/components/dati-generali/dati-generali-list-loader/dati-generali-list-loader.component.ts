import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiGeneraliResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-generali-list-loader',
    templateUrl: './dati-generali-list-loader.component.html',
    styleUrls: ['./dati-generali-list-loader.component.scss']
})
export class AgalDatiGeneraliListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiGeneraliResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiGeneralisUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiGeneralisUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

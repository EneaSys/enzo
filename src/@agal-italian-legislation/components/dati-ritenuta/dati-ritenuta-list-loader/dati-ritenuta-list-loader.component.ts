import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiRitenutaResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-ritenuta-list-loader',
    templateUrl: './dati-ritenuta-list-loader.component.html',
    styleUrls: ['./dati-ritenuta-list-loader.component.scss']
})
export class AgalDatiRitenutaListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiRitenutaResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiRitenutasUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiRitenutasUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

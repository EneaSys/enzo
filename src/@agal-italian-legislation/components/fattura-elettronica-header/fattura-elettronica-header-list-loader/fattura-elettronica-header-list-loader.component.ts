import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { FatturaElettronicaHeaderResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-fattura-elettronica-header-list-loader',
    templateUrl: './fattura-elettronica-header-list-loader.component.html',
    styleUrls: ['./fattura-elettronica-header-list-loader.component.scss']
})
export class AgalFatturaElettronicaHeaderListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: FatturaElettronicaHeaderResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllFatturaElettronicaHeadersUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countFatturaElettronicaHeadersUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

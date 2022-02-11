import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { FatturaElettronicaBodyResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-fattura-elettronica-body-list-loader',
    templateUrl: './fattura-elettronica-body-list-loader.component.html',
    styleUrls: ['./fattura-elettronica-body-list-loader.component.scss']
})
export class AgalFatturaElettronicaBodyListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: FatturaElettronicaBodyResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllFatturaElettronicaBodiesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countFatturaElettronicaBodiesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiDdtResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-ddt-list-loader',
    templateUrl: './dati-ddt-list-loader.component.html',
    styleUrls: ['./dati-ddt-list-loader.component.scss']
})
export class AgalDatiDdtListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiDdtResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiDdtsUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiDdtsUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

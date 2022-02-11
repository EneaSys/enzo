import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiBolloResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-bollo-list-loader',
    templateUrl: './dati-bollo-list-loader.component.html',
    styleUrls: ['./dati-bollo-list-loader.component.scss']
})
export class AgalDatiBolloListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiBolloResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiBollosUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiBollosUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

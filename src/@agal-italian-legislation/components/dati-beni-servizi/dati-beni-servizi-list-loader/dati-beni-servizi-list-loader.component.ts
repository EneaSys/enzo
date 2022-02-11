import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiBeniServiziResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-beni-servizi-list-loader',
    templateUrl: './dati-beni-servizi-list-loader.component.html',
    styleUrls: ['./dati-beni-servizi-list-loader.component.scss']
})
export class AgalDatiBeniServiziListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiBeniServiziResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiBeniServizisUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiBeniServizisUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

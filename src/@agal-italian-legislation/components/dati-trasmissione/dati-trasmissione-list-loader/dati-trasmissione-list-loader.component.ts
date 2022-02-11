import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiTrasmissioneResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-trasmissione-list-loader',
    templateUrl: './dati-trasmissione-list-loader.component.html',
    styleUrls: ['./dati-trasmissione-list-loader.component.scss']
})
export class AgalDatiTrasmissioneListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiTrasmissioneResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiTrasmissionesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiTrasmissionesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

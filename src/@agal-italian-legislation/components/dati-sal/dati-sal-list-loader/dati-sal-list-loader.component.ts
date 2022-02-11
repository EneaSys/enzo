import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiSalResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-sal-list-loader',
    templateUrl: './dati-sal-list-loader.component.html',
    styleUrls: ['./dati-sal-list-loader.component.scss']
})
export class AgalDatiSalListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiSalResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiSalsUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiSalsUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

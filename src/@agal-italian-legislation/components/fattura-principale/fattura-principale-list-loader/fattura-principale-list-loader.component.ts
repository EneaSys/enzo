import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { FatturaPrincipaleResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-fattura-principale-list-loader',
    templateUrl: './fattura-principale-list-loader.component.html',
    styleUrls: ['./fattura-principale-list-loader.component.scss']
})
export class AgalFatturaPrincipaleListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: FatturaPrincipaleResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllFatturaPrincipalesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countFatturaPrincipalesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { CedentePrestatoreResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-cedente-prestatore-list-loader',
    templateUrl: './cedente-prestatore-list-loader.component.html',
    styleUrls: ['./cedente-prestatore-list-loader.component.scss']
})
export class AgalCedentePrestatoreListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: CedentePrestatoreResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllCedentePrestatoresUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countCedentePrestatoresUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

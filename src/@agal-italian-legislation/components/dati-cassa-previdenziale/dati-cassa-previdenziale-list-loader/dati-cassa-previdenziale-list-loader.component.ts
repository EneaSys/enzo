import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiCassaPrevidenzialeResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-cassa-previdenziale-list-loader',
    templateUrl: './dati-cassa-previdenziale-list-loader.component.html',
    styleUrls: ['./dati-cassa-previdenziale-list-loader.component.scss']
})
export class AgalDatiCassaPrevidenzialeListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiCassaPrevidenzialeResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiCassaPrevidenzialesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiCassaPrevidenzialesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

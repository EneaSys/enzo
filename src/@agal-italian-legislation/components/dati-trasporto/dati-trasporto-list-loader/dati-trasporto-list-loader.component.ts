import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiTrasportoResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-trasporto-list-loader',
    templateUrl: './dati-trasporto-list-loader.component.html',
    styleUrls: ['./dati-trasporto-list-loader.component.scss']
})
export class AgalDatiTrasportoListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiTrasportoResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiTrasportosUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiTrasportosUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { IndirizzoResaResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-indirizzo-resa-list-loader',
    templateUrl: './indirizzo-resa-list-loader.component.html',
    styleUrls: ['./indirizzo-resa-list-loader.component.scss']
})
export class AgalIndirizzoResaListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: IndirizzoResaResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllIndirizzoResasUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countIndirizzoResasUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

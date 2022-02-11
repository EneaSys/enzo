import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { RappresentanteFiscaleResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-rappresentante-fiscale-list-loader',
    templateUrl: './rappresentante-fiscale-list-loader.component.html',
    styleUrls: ['./rappresentante-fiscale-list-loader.component.scss']
})
export class AgalRappresentanteFiscaleListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: RappresentanteFiscaleResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllRappresentanteFiscalesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countRappresentanteFiscalesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

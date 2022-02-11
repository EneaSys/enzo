import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiFattureCollegateResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-fatture-collegate-list-loader',
    templateUrl: './dati-fatture-collegate-list-loader.component.html',
    styleUrls: ['./dati-fatture-collegate-list-loader.component.scss']
})
export class AgalDatiFattureCollegateListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiFattureCollegateResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiFattureCollegatesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiFattureCollegatesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

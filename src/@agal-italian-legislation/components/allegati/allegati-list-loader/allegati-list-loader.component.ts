import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AllegatiResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-allegati-list-loader',
    templateUrl: './allegati-list-loader.component.html',
    styleUrls: ['./allegati-list-loader.component.scss']
})
export class AgalAllegatiListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: AllegatiResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllAllegatisUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countAllegatisUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

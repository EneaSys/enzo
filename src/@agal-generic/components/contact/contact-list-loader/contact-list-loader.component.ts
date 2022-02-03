import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { ContactResourceService } from 'aig-generic';

@Component({
    selector: 'agal-contact-list-loader',
    templateUrl: './contact-list-loader.component.html',
    styleUrls: ['./contact-list-loader.component.scss']
})
export class AgalContactListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: ContactResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllContactsUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countContactsUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

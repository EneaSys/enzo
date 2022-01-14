import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable } from '@agal-core/components/agal-generic-table';

import {ContactResourceService } from 'aig-generic';

@Component({
    selector: 'agal-contact-list-loader',
    templateUrl: './contact-list-loader.component.html',
    styleUrls: ['./contact-list-loader.component.scss']
})
export class AgalContactListLoaderComponent extends AgalGenericTable {
    constructor(
        private resourceService: ContactResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        this.ds = await this.resourceService.getAllContactsUsingGET(filters).toPromise();
        this.totalRecords = await this.resourceService.countContactsUsingGET(filters).toPromise();
    }
}

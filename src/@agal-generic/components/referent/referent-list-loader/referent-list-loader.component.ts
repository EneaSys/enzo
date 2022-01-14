import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable } from '@agal-core/components/agal-generic-table';

import {ReferentResourceService } from 'aig-generic';

@Component({
    selector: 'agal-referent-list-loader',
    templateUrl: './referent-list-loader.component.html',
    styleUrls: ['./referent-list-loader.component.scss']
})
export class AgalReferentListLoaderComponent extends AgalGenericTable {
    constructor(
        private resourceService: ReferentResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        this.ds = await this.resourceService.getAllReferentsUsingGET(filters).toPromise();
        this.totalRecords = await this.resourceService.countReferentsUsingGET(filters).toPromise();
    }
}

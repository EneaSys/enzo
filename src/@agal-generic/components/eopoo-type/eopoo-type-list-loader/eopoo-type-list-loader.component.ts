import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable } from '@agal-core/components/agal-generic-table';

import {EopooTypeResourceService } from 'aig-generic';

@Component({
    selector: 'agal-eopoo-type-list-loader',
    templateUrl: './eopoo-type-list-loader.component.html',
    styleUrls: ['./eopoo-type-list-loader.component.scss']
})
export class AgalEopooTypeListLoaderComponent extends AgalGenericTable {
    constructor(
        private resourceService: EopooTypeResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        this.ds = await this.resourceService.getAllEopooTypesUsingGET(filters).toPromise();
        this.totalRecords = await this.resourceService.countEopooTypesUsingGET(filters).toPromise();
    }
}

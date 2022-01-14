import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable } from '@agal-core/components/agal-generic-table';

import {AddressResourceService } from 'aig-generic';

@Component({
    selector: 'agal-address-list-loader',
    templateUrl: './address-list-loader.component.html',
    styleUrls: ['./address-list-loader.component.scss']
})
export class AgalAddressListLoaderComponent extends AgalGenericTable {
    constructor(
        private resourceService: AddressResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        this.ds = await this.resourceService.getAllAddressesUsingGET(filters).toPromise();
        this.totalRecords = await this.resourceService.countAddressesUsingGET(filters).toPromise();
    }
}

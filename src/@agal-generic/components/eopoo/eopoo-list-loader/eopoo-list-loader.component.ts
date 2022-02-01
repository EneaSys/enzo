import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable } from '@agal-core/components/agal-generic-table';

import { EopooResourceService } from 'aig-generic';

@Component({
    selector: 'agal-eopoo-list-loader',
    templateUrl: './eopoo-list-loader.component.html',
    styleUrls: ['./eopoo-list-loader.component.scss']
})
export class AgalEopooListLoaderComponent extends AgalGenericTable {
    constructor(
        private resourceService: EopooResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        this.ds = await this.resourceService.getAllEopoosUsingGET(filters).toPromise();
        this.totalRecords = await this.resourceService.countEopoosUsingGET(filters).toPromise();
    }
}

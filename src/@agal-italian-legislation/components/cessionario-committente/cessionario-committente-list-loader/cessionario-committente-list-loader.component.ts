import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { CessionarioCommittenteResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-cessionario-committente-list-loader',
    templateUrl: './cessionario-committente-list-loader.component.html',
    styleUrls: ['./cessionario-committente-list-loader.component.scss']
})
export class AgalCessionarioCommittenteListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: CessionarioCommittenteResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllCessionarioCommittentesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countCessionarioCommittentesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

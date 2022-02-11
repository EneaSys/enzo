import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DossierResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dossier-list-loader',
    templateUrl: './dossier-list-loader.component.html',
    styleUrls: ['./dossier-list-loader.component.scss']
})
export class AgalDossierListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DossierResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDossiersUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDossiersUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

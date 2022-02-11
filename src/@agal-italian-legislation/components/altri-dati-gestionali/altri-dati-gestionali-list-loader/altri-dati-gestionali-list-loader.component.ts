import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AltriDatiGestionaliResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-altri-dati-gestionali-list-loader',
    templateUrl: './altri-dati-gestionali-list-loader.component.html',
    styleUrls: ['./altri-dati-gestionali-list-loader.component.scss']
})
export class AgalAltriDatiGestionaliListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: AltriDatiGestionaliResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllAltriDatiGestionalisUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countAltriDatiGestionalisUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiConvenzioneResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-convenzione-list-loader',
    templateUrl: './dati-convenzione-list-loader.component.html',
    styleUrls: ['./dati-convenzione-list-loader.component.scss']
})
export class AgalDatiConvenzioneListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiConvenzioneResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiConvenzionesUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiConvenzionesUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

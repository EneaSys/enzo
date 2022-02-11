import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiRiepilogoResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-riepilogo-list-loader',
    templateUrl: './dati-riepilogo-list-loader.component.html',
    styleUrls: ['./dati-riepilogo-list-loader.component.scss']
})
export class AgalDatiRiepilogoListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiRiepilogoResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiRiepilogosUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiRiepilogosUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

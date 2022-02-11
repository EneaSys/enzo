import { Component } from '@angular/core';

import { AgalCommonService } from '@agal-core/services/common.service';

import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { DatiGeneraliDocumentoResourceService } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-generali-documento-list-loader',
    templateUrl: './dati-generali-documento-list-loader.component.html',
    styleUrls: ['./dati-generali-documento-list-loader.component.scss']
})
export class AgalDatiGeneraliDocumentoListLoaderComponent extends AgalGenericTable2 {
    constructor(
        private resourceService: DatiGeneraliDocumentoResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    protected async callApi(filters: any) {
        try {
			this.ds = await this.resourceService.getAllDatiGeneraliDocumentosUsingGET(filters).toPromise();
			this.totalRecords = await this.resourceService.countDatiGeneraliDocumentosUsingGET(filters).toPromise();
		} catch(e) {
			console.log(e);
		}
    }
}

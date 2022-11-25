import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiGeneraliDocumentoDTO } from '../../../class/dati-generali-documento-dto.class';
import { AigDatiGeneraliDocumentoResourceService } from '../../../services/dati-generali-documento.service';

@Component({
	selector: 'aig-dati-generali-documento-list-loader',
	templateUrl: './dati-generali-documento-list-loader.component.html',
	styleUrls: ['./dati-generali-documento-list-loader.component.scss']
})
export class AigDatiGeneraliDocumentoListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiGeneraliDocumentoResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiGeneraliDocumentosUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiGeneraliDocumentosUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

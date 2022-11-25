import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDossierDTO } from '../../../class/dossier-dto.class';
import { AigDossierResourceService } from '../../../services/dossier.service';

@Component({
	selector: 'aig-dossier-list-loader',
	templateUrl: './dossier-list-loader.component.html',
	styleUrls: ['./dossier-list-loader.component.scss']
})
export class AigDossierListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDossierResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDossiersUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDossiersUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

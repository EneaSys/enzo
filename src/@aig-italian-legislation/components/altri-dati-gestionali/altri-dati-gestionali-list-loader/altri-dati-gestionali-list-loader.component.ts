import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigAltriDatiGestionaliDTO } from '../../../class/altri-dati-gestionali-dto.class';
import { AigAltriDatiGestionaliResourceService } from '../../../services/altri-dati-gestionali.service';

@Component({
	selector: 'aig-altri-dati-gestionali-list-loader',
	templateUrl: './altri-dati-gestionali-list-loader.component.html',
	styleUrls: ['./altri-dati-gestionali-list-loader.component.scss']
})
export class AigAltriDatiGestionaliListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigAltriDatiGestionaliResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllAltriDatiGestionalisUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countAltriDatiGestionalisUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

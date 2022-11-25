import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigDatiRiepilogoDTO } from '../../../class/dati-riepilogo-dto.class';
import { AigDatiRiepilogoResourceService } from '../../../services/dati-riepilogo.service';

@Component({
	selector: 'aig-dati-riepilogo-list-loader',
	templateUrl: './dati-riepilogo-list-loader.component.html',
	styleUrls: ['./dati-riepilogo-list-loader.component.scss']
})
export class AigDatiRiepilogoListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigDatiRiepilogoResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllDatiRiepilogosUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countDatiRiepilogosUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

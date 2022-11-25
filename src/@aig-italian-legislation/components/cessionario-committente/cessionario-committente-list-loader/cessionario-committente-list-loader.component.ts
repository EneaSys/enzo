import { Component } from '@angular/core';
import { lastValueFrom } from 'rxjs';

import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalGenericTable2 } from '@agal-core/components/agal-generic-table2';

import { AigCessionarioCommittenteDTO } from '../../../class/cessionario-committente-dto.class';
import { AigCessionarioCommittenteResourceService } from '../../../services/cessionario-committente.service';

@Component({
	selector: 'aig-cessionario-committente-list-loader',
	templateUrl: './cessionario-committente-list-loader.component.html',
	styleUrls: ['./cessionario-committente-list-loader.component.scss']
})
export class AigCessionarioCommittenteListLoaderComponent extends AgalGenericTable2 {
	constructor(
		private resourceService: AigCessionarioCommittenteResourceService,
		agcs: AgalCommonService,

	) { super(agcs); }

	protected async callApi(filters: any) {
		try {
			this.ds = await lastValueFrom(this.resourceService.getAllCessionarioCommittentesUsingGET(filters));
			this.totalRecords = await lastValueFrom(this.resourceService.countCessionarioCommittentesUsingGET(filters));
		} catch(e) {
			console.log(e);
		}
	}
}

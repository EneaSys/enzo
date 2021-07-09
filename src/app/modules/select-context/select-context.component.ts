import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TenantContextDTO, TenantContextResourceService } from 'aig-management';
import { EnzoContextService } from 'app/core/context/context.service';

@Component({
    templateUrl  : './select-context.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SelectContextComponent implements OnInit{
    constructor(
		private enzoContextService: EnzoContextService,
		private tenantContextResourceService: TenantContextResourceService,
	) { }

	tenantContextDTOs: TenantContextDTO[];

	async ngOnInit() {
		this.tenantContextDTOs = await this.tenantContextResourceService.getAllTenantContextsUsingGET({}).toPromise();
	}

	selectContext(context: any) {
		this.enzoContextService.setCurrentAndActiveContext(context);
	}
}

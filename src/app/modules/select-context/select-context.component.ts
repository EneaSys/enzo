import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ResponseMyContexts, WsUserContextService } from 'aig-management';
import { EnzoContextService } from 'app/core/context/context.service';

@Component({
    templateUrl  : './select-context.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SelectContextComponent implements OnInit{
    constructor(
		private enzoContextService: EnzoContextService,
		private wsUserContextService: WsUserContextService,
	) { }

	tenantContextDTOs: ResponseMyContexts[];

	async ngOnInit() {
		this.tenantContextDTOs = await this.wsUserContextService.getMyContexts().toPromise();
	}

	selectContext(context: any) {
		this.enzoContextService.setCurrentAndActiveContext(context);
	}
}

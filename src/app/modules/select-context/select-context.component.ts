import { Component, ViewEncapsulation } from '@angular/core';
import { EnzoContextService } from 'app/core/context/context.service';

@Component({
    templateUrl  : './select-context.component.html',
    encapsulation: ViewEncapsulation.None
})
export class SelectContextComponent
{
    constructor(
		private enzoContextService: EnzoContextService
	) { }

	selectContext(context: any) {
		this.enzoContextService.setCurrentAndActiveContext(context);
	}
}

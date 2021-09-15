import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
	selector: 'enzo-context-module-list-page',
	templateUrl: './context-module-list-page.component.html',
	styleUrls: ['./context-module-list-page.component.scss']
})
export class EnzoContextModuleListPageComponent extends EnzoGenericComponent1 {
	constructor(
		_gcs: EnzoGenericComponentService1,
    ) { 
		super(_gcs);
		this.tmCurrentComponent.name = 'ContextModule';
	}


}
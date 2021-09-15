import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
	selector: 'enzo-context-user-list-page',
	templateUrl: './context-user-list-page.component.html',
	styleUrls: ['./context-user-list-page.component.scss']
})
export class EnzoContextUserListPageComponent extends EnzoGenericComponent1 {
	constructor(
		_gcs: EnzoGenericComponentService1,
    ) { 
		super(_gcs);
		this.tmCurrentComponent.name = 'ContextUser';
	}


}
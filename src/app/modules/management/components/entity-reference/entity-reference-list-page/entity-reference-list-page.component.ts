import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
	selector: 'enzo-entity-reference-list-page',
	templateUrl: './entity-reference-list-page.component.html',
	styleUrls: ['./entity-reference-list-page.component.scss']
})
export class EnzoEntityReferenceListPageComponent extends EnzoGenericComponent1 {
	constructor(
		_gcs: EnzoGenericComponentService1,
    ) { 
		super(_gcs);
		this.tmCurrentComponent.name = 'EntityReference';
	}


}
import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
	selector: 'enzo-object-reference-list-page',
	templateUrl: './object-reference-list-page.component.html',
	styleUrls: ['./object-reference-list-page.component.scss']
})
export class EnzoObjectReferenceListPageComponent extends EnzoGenericComponent1 {
	constructor(
		_gcs: EnzoGenericComponentService1,
    ) { 
		super(_gcs);
		this.tmCurrentComponent.name = 'ObjectReference';
	}


}
import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
	selector: 'enzo-field-reference-list-page',
	templateUrl: './field-reference-list-page.component.html',
	styleUrls: ['./field-reference-list-page.component.scss']
})
export class EnzoFieldReferenceListPageComponent extends EnzoGenericComponent1 {
	constructor(
		_gcs: EnzoGenericComponentService1,
    ) { 
		super(_gcs);
		this.tmCurrentComponent.name = 'FieldReference';
	}


}
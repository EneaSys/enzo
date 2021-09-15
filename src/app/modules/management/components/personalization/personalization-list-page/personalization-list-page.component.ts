import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
	selector: 'enzo-personalization-list-page',
	templateUrl: './personalization-list-page.component.html',
	styleUrls: ['./personalization-list-page.component.scss']
})
export class EnzoPersonalizationListPageComponent extends EnzoGenericComponent1 {
	constructor(
		_gcs: EnzoGenericComponentService1,
    ) { 
		super(_gcs);
		this.tmCurrentComponent.name = 'Personalization';
	}


}
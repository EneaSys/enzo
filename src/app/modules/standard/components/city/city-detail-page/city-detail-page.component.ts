import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
	selector: 'cle-city-detail-page',
	templateUrl: './city-detail-page.component.html',
	styleUrls: ['./city-detail-page.component.scss']
})
export class EnzoCityDetailPageComponent extends EnzoGenericComponent1 {
	constructor(
		_gcs: EnzoGenericComponentService1,
    ) { 
		super(_gcs);
		this.tmCurrentComponent.name = 'City name';
	}

	
}

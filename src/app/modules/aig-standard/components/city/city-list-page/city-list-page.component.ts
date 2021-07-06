import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
	selector: 'cle-city-list-page',
	templateUrl: './city-list-page.component.html',
	styleUrls: ['./city-list-page.component.scss']
})
export class EnzoCityListPageComponent extends EnzoGenericComponent1 {
	constructor(
		_gcs: EnzoGenericComponentService1,
    ) { 
		super(_gcs);
		this.tmCurrentComponent.name = 'Citys';
	}


}

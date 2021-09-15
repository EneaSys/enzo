import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
	selector: 'enzo-licenze-list-page',
	templateUrl: './licenze-list-page.component.html',
	styleUrls: ['./licenze-list-page.component.scss']
})
export class EnzoLicenzeListPageComponent extends EnzoGenericComponent1 {
	constructor(
		_gcs: EnzoGenericComponentService1,
    ) { 
		super(_gcs);
		this.tmCurrentComponent.name = 'Licenze';
	}


}
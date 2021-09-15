import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
	selector: 'enzo-user-licenze-list-page',
	templateUrl: './user-licenze-list-page.component.html',
	styleUrls: ['./user-licenze-list-page.component.scss']
})
export class EnzoUserLicenzeListPageComponent extends EnzoGenericComponent1 {
	constructor(
		_gcs: EnzoGenericComponentService1,
    ) { 
		super(_gcs);
		this.tmCurrentComponent.name = 'UserLicenze';
	}


}
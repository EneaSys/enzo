import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
	selector: 'enzo-user-license-list-page',
	templateUrl: './user-license-list-page.component.html',
	styleUrls: ['./user-license-list-page.component.scss']
})
export class EnzoUserLicenseListPageComponent extends EnzoGenericComponent1 {
	constructor(
		_gcs: EnzoGenericComponentService1,
    ) { 
		super(_gcs);
		this.tmCurrentComponent.name = 'UserLicense';
	}


}
import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
    templateUrl  : './sidebar.component.html',
})
export class SidebarComponent extends EnzoGenericComponent1 {
    constructor(
		public _gcs: EnzoGenericComponentService1,
	) {
		super(_gcs);
		this.tmCurrentComponent.name = 'Sidebar';
	}

	rename() {
		this.tmCurrentComponent.name = 'banana';
	}
}

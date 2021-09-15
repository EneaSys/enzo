import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
    templateUrl  : './detail-page.component.html',
})
export class EnzoDetailPageComponent extends EnzoGenericComponent1 {
    constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		public _gcs: EnzoGenericComponentService1,
	) {
		super(_gcs);
		let id = activatedRoute.snapshot.paramMap.get('id');
		this.tmCurrentComponent.name = 'Detail '+id;
	}

	rename() {
		this.tmCurrentComponent.name = 'banana';
	}


	
}

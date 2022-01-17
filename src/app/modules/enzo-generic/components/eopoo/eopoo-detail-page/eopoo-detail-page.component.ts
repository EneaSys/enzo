import { Component } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { EopooDTO } from 'aig-italianlegislation';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
    templateUrl  : './eopoo-detail-page.component.html',
})
export class EnzoEopooDetailPageComponent extends EnzoGenericComponent1 {
    constructor(
		private router: Router,
		private activatedRoute: ActivatedRoute,
		public _gcs: EnzoGenericComponentService1,
	) {
		super(_gcs);
		this.id = +activatedRoute.snapshot.paramMap.get('id');
		this.tmCurrentComponent.name = 'Detail ' + this.id;
	}

	id: number;

	rename() {
		this.tmCurrentComponent.name = 'banana';
	}


	eopooDTO: EopooDTO;

  	loadPage() {
    this.eopooDTO = this.activatedRoute.snapshot.data.paramMap.get('id');
	}


	
}

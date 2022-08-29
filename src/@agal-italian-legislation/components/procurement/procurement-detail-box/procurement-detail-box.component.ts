import { Component, Input, OnInit } from '@angular/core';
import { ProcurementDTO } from 'aig-italianlegislation';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';

@Component({
    selector: 'agal-procurement-detail-box',
    templateUrl: './procurement-detail-box.component.html',
    styleUrls: ['./procurement-detail-box.component.scss']
})
export class AgalProcurementDetailBoxComponent {

	@Input()
    procurement: ProcurementDTO;

	constructor(
		public _gcs: EnzoGenericComponentService1,
	) { }
}
import { Component, Input, OnInit } from '@angular/core';
import { AigProcurementDTO } from '../../../class/procurement-dto.class';

@Component({
	selector: 'aig-procurement-detail-box',
	templateUrl: './procurement-detail-box.component.html',
	styleUrls: ['./procurement-detail-box.component.scss']
})
export class AigProcurementDetailBoxComponent {

	@Input()
	procurement: AigProcurementDTO;

	constructor( ) { }
}
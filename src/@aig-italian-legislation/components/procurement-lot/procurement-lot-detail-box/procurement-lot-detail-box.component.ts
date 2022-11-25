import { Component, Input, OnInit } from '@angular/core';
import { AigProcurementLotDTO } from '../../../class/procurement-lot-dto.class';

@Component({
	selector: 'aig-procurement-lot-detail-box',
	templateUrl: './procurement-lot-detail-box.component.html',
	styleUrls: ['./procurement-lot-detail-box.component.scss']
})
export class AigProcurementLotDetailBoxComponent {

	@Input()
	procurementLot: AigProcurementLotDTO;

	constructor( ) { }
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-procurement-lot-display-column',
	templateUrl: './procurement-lot-display-column.component.html',
	styleUrls: ['./procurement-lot-display-column.component.scss']
})
export class AigProcurementLotDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
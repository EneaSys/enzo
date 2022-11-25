import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-procurement-display-column',
	templateUrl: './procurement-display-column.component.html',
	styleUrls: ['./procurement-display-column.component.scss']
})
export class AigProcurementDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
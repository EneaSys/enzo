import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-procurement-lot-category-display-column',
	templateUrl: './procurement-lot-category-display-column.component.html',
	styleUrls: ['./procurement-lot-category-display-column.component.scss']
})
export class AigProcurementLotCategoryDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
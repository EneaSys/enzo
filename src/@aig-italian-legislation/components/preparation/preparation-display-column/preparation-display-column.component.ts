import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-preparation-display-column',
	templateUrl: './preparation-display-column.component.html',
	styleUrls: ['./preparation-display-column.component.scss']
})
export class AigPreparationDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-preparation-display-column',
	templateUrl: './preparation-display-column.component.html',
	styleUrls: ['./preparation-display-column.component.scss']
})
export class AgalPreparationDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
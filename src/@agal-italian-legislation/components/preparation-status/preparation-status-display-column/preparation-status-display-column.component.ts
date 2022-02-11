import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-preparation-status-display-column',
	templateUrl: './preparation-status-display-column.component.html',
	styleUrls: ['./preparation-status-display-column.component.scss']
})
export class AgalPreparationStatusDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
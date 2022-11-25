import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-preparation-modality-display-column',
	templateUrl: './preparation-modality-display-column.component.html',
	styleUrls: ['./preparation-modality-display-column.component.scss']
})
export class AigPreparationModalityDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
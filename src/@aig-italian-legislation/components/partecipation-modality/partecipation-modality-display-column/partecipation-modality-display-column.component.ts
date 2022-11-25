import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-partecipation-modality-display-column',
	templateUrl: './partecipation-modality-display-column.component.html',
	styleUrls: ['./partecipation-modality-display-column.component.scss']
})
export class AigPartecipationModalityDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
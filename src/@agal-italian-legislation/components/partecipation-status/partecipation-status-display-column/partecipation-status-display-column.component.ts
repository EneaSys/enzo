import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-partecipation-status-display-column',
	templateUrl: './partecipation-status-display-column.component.html',
	styleUrls: ['./partecipation-status-display-column.component.scss']
})
export class AgalPartecipationStatusDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-partecipation-display-column',
	templateUrl: './partecipation-display-column.component.html',
	styleUrls: ['./partecipation-display-column.component.scss']
})
export class AgalPartecipationDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
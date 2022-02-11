import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-rappresentante-fiscale-display-column',
	templateUrl: './rappresentante-fiscale-display-column.component.html',
	styleUrls: ['./rappresentante-fiscale-display-column.component.scss']
})
export class AgalRappresentanteFiscaleDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
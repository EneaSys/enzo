import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-indirizzo-resa-display-column',
	templateUrl: './indirizzo-resa-display-column.component.html',
	styleUrls: ['./indirizzo-resa-display-column.component.scss']
})
export class AigIndirizzoResaDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
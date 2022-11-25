import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-fatture-collegate-display-column',
	templateUrl: './dati-fatture-collegate-display-column.component.html',
	styleUrls: ['./dati-fatture-collegate-display-column.component.scss']
})
export class AigDatiFattureCollegateDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
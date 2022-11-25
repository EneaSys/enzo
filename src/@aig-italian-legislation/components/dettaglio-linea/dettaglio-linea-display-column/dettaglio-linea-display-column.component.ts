import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dettaglio-linea-display-column',
	templateUrl: './dettaglio-linea-display-column.component.html',
	styleUrls: ['./dettaglio-linea-display-column.component.scss']
})
export class AigDettaglioLineaDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
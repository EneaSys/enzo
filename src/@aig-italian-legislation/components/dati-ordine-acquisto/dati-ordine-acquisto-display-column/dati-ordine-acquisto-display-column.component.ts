import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-ordine-acquisto-display-column',
	templateUrl: './dati-ordine-acquisto-display-column.component.html',
	styleUrls: ['./dati-ordine-acquisto-display-column.component.scss']
})
export class AigDatiOrdineAcquistoDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
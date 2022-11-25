import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-veicoli-display-column',
	templateUrl: './dati-veicoli-display-column.component.html',
	styleUrls: ['./dati-veicoli-display-column.component.scss']
})
export class AigDatiVeicoliDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
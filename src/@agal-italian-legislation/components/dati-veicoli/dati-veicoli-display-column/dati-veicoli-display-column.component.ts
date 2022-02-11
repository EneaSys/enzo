import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-dati-veicoli-display-column',
	templateUrl: './dati-veicoli-display-column.component.html',
	styleUrls: ['./dati-veicoli-display-column.component.scss']
})
export class AgalDatiVeicoliDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
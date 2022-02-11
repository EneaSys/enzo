import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-riferimento-numero-linea-display-column',
	templateUrl: './riferimento-numero-linea-display-column.component.html',
	styleUrls: ['./riferimento-numero-linea-display-column.component.scss']
})
export class AgalRiferimentoNumeroLineaDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
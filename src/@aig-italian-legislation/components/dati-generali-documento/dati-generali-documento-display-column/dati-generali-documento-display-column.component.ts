import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-generali-documento-display-column',
	templateUrl: './dati-generali-documento-display-column.component.html',
	styleUrls: ['./dati-generali-documento-display-column.component.scss']
})
export class AigDatiGeneraliDocumentoDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
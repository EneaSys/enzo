import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-fattura-elettronica-header-display-column',
	templateUrl: './fattura-elettronica-header-display-column.component.html',
	styleUrls: ['./fattura-elettronica-header-display-column.component.scss']
})
export class AigFatturaElettronicaHeaderDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
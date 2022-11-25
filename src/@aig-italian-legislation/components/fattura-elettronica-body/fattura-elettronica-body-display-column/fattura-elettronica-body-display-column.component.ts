import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-fattura-elettronica-body-display-column',
	templateUrl: './fattura-elettronica-body-display-column.component.html',
	styleUrls: ['./fattura-elettronica-body-display-column.component.scss']
})
export class AigFatturaElettronicaBodyDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
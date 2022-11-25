import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-generali-display-column',
	templateUrl: './dati-generali-display-column.component.html',
	styleUrls: ['./dati-generali-display-column.component.scss']
})
export class AigDatiGeneraliDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
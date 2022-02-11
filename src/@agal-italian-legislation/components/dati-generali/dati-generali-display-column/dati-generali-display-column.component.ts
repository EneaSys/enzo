import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-dati-generali-display-column',
	templateUrl: './dati-generali-display-column.component.html',
	styleUrls: ['./dati-generali-display-column.component.scss']
})
export class AgalDatiGeneraliDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
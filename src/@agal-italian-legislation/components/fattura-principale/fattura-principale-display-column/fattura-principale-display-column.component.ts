import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-fattura-principale-display-column',
	templateUrl: './fattura-principale-display-column.component.html',
	styleUrls: ['./fattura-principale-display-column.component.scss']
})
export class AgalFatturaPrincipaleDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
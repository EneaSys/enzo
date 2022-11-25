import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-fattura-principale-display-column',
	templateUrl: './fattura-principale-display-column.component.html',
	styleUrls: ['./fattura-principale-display-column.component.scss']
})
export class AigFatturaPrincipaleDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
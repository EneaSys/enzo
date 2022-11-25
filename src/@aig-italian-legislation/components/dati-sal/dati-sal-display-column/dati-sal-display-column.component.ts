import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-sal-display-column',
	templateUrl: './dati-sal-display-column.component.html',
	styleUrls: ['./dati-sal-display-column.component.scss']
})
export class AigDatiSalDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
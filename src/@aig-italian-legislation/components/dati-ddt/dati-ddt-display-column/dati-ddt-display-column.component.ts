import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-ddt-display-column',
	templateUrl: './dati-ddt-display-column.component.html',
	styleUrls: ['./dati-ddt-display-column.component.scss']
})
export class AigDatiDdtDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
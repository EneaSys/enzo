import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-contratto-display-column',
	templateUrl: './dati-contratto-display-column.component.html',
	styleUrls: ['./dati-contratto-display-column.component.scss']
})
export class AigDatiContrattoDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
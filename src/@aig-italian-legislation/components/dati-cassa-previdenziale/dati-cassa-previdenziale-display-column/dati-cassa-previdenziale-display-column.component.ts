import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-cassa-previdenziale-display-column',
	templateUrl: './dati-cassa-previdenziale-display-column.component.html',
	styleUrls: ['./dati-cassa-previdenziale-display-column.component.scss']
})
export class AigDatiCassaPrevidenzialeDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
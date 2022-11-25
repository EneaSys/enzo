import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-ritenuta-display-column',
	templateUrl: './dati-ritenuta-display-column.component.html',
	styleUrls: ['./dati-ritenuta-display-column.component.scss']
})
export class AigDatiRitenutaDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
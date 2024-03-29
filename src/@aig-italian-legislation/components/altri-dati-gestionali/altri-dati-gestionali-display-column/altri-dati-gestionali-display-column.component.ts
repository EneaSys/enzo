import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-altri-dati-gestionali-display-column',
	templateUrl: './altri-dati-gestionali-display-column.component.html',
	styleUrls: ['./altri-dati-gestionali-display-column.component.scss']
})
export class AigAltriDatiGestionaliDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
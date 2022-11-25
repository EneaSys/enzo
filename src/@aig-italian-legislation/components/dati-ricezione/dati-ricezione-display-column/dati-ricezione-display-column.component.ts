import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-ricezione-display-column',
	templateUrl: './dati-ricezione-display-column.component.html',
	styleUrls: ['./dati-ricezione-display-column.component.scss']
})
export class AigDatiRicezioneDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
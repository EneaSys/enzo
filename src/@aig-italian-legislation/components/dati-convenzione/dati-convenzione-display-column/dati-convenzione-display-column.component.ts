import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-convenzione-display-column',
	templateUrl: './dati-convenzione-display-column.component.html',
	styleUrls: ['./dati-convenzione-display-column.component.scss']
})
export class AigDatiConvenzioneDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
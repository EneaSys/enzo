import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-dati-convenzione-display-column',
	templateUrl: './dati-convenzione-display-column.component.html',
	styleUrls: ['./dati-convenzione-display-column.component.scss']
})
export class AgalDatiConvenzioneDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
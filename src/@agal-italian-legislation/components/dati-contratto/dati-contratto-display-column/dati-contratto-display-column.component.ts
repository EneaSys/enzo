import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-dati-contratto-display-column',
	templateUrl: './dati-contratto-display-column.component.html',
	styleUrls: ['./dati-contratto-display-column.component.scss']
})
export class AgalDatiContrattoDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
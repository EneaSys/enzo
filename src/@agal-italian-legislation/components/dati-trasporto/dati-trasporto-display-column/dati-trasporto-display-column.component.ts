import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-dati-trasporto-display-column',
	templateUrl: './dati-trasporto-display-column.component.html',
	styleUrls: ['./dati-trasporto-display-column.component.scss']
})
export class AgalDatiTrasportoDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
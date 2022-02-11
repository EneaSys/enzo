import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-dati-trasmissione-display-column',
	templateUrl: './dati-trasmissione-display-column.component.html',
	styleUrls: ['./dati-trasmissione-display-column.component.scss']
})
export class AgalDatiTrasmissioneDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-dati-cassa-previdenziale-display-column',
	templateUrl: './dati-cassa-previdenziale-display-column.component.html',
	styleUrls: ['./dati-cassa-previdenziale-display-column.component.scss']
})
export class AgalDatiCassaPrevidenzialeDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
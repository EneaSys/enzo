import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-dati-beni-servizi-display-column',
	templateUrl: './dati-beni-servizi-display-column.component.html',
	styleUrls: ['./dati-beni-servizi-display-column.component.scss']
})
export class AgalDatiBeniServiziDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
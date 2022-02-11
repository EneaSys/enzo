import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-soggetto-emittente-display-column',
	templateUrl: './soggetto-emittente-display-column.component.html',
	styleUrls: ['./soggetto-emittente-display-column.component.scss']
})
export class AgalSoggettoEmittenteDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
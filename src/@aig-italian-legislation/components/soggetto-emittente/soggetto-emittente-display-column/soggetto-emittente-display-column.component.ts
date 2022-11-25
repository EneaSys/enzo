import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-soggetto-emittente-display-column',
	templateUrl: './soggetto-emittente-display-column.component.html',
	styleUrls: ['./soggetto-emittente-display-column.component.scss']
})
export class AigSoggettoEmittenteDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
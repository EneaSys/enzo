import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-terzo-intermediario-o-soggetto-emittente-display-column',
	templateUrl: './terzo-intermediario-o-soggetto-emittente-display-column.component.html',
	styleUrls: ['./terzo-intermediario-o-soggetto-emittente-display-column.component.scss']
})
export class AgalTerzoIntermediarioOSoggettoEmittenteDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
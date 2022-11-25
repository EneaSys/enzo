import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-sconto-maggiorazione-linea-display-column',
	templateUrl: './sconto-maggiorazione-linea-display-column.component.html',
	styleUrls: ['./sconto-maggiorazione-linea-display-column.component.scss']
})
export class AigScontoMaggiorazioneLineaDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-sconto-maggiorazione-display-column',
	templateUrl: './sconto-maggiorazione-display-column.component.html',
	styleUrls: ['./sconto-maggiorazione-display-column.component.scss']
})
export class AigScontoMaggiorazioneDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
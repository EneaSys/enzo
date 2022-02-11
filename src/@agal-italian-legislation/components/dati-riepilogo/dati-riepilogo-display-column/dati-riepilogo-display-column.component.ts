import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-dati-riepilogo-display-column',
	templateUrl: './dati-riepilogo-display-column.component.html',
	styleUrls: ['./dati-riepilogo-display-column.component.scss']
})
export class AgalDatiRiepilogoDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
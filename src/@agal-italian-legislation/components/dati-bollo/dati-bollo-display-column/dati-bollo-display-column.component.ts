import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-dati-bollo-display-column',
	templateUrl: './dati-bollo-display-column.component.html',
	styleUrls: ['./dati-bollo-display-column.component.scss']
})
export class AgalDatiBolloDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
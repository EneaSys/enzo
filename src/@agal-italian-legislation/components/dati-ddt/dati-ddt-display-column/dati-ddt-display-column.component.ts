import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-dati-ddt-display-column',
	templateUrl: './dati-ddt-display-column.component.html',
	styleUrls: ['./dati-ddt-display-column.component.scss']
})
export class AgalDatiDdtDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
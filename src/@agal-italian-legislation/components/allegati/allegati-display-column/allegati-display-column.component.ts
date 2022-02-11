import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-allegati-display-column',
	templateUrl: './allegati-display-column.component.html',
	styleUrls: ['./allegati-display-column.component.scss']
})
export class AgalAllegatiDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-allegati-display-column',
	templateUrl: './allegati-display-column.component.html',
	styleUrls: ['./allegati-display-column.component.scss']
})
export class AigAllegatiDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
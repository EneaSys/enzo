import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'eopoo-display-column',
	templateUrl: './eopoo-display-column.component.html',
	styleUrls: ['./eopoo-display-column.component.scss']
})
export class AgalEopooDisplayColumnComponent {
	
	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}

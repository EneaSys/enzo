import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-designated-company-display-column',
	templateUrl: './designated-company-display-column.component.html',
	styleUrls: ['./designated-company-display-column.component.scss']
})
export class AgalDesignatedCompanyDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
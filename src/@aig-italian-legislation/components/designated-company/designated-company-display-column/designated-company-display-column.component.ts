import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-designated-company-display-column',
	templateUrl: './designated-company-display-column.component.html',
	styleUrls: ['./designated-company-display-column.component.scss']
})
export class AigDesignatedCompanyDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
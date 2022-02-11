import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-insurance-policy-display-column',
	templateUrl: './insurance-policy-display-column.component.html',
	styleUrls: ['./insurance-policy-display-column.component.scss']
})
export class AgalInsurancePolicyDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
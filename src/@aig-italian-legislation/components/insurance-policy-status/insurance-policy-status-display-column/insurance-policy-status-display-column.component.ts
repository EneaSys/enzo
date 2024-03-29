import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-insurance-policy-status-display-column',
	templateUrl: './insurance-policy-status-display-column.component.html',
	styleUrls: ['./insurance-policy-status-display-column.component.scss']
})
export class AigInsurancePolicyStatusDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
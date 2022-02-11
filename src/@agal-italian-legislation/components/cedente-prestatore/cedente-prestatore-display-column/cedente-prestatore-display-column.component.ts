import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-cedente-prestatore-display-column',
	templateUrl: './cedente-prestatore-display-column.component.html',
	styleUrls: ['./cedente-prestatore-display-column.component.scss']
})
export class AgalCedentePrestatoreDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
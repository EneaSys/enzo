import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-cessionario-committente-display-column',
	templateUrl: './cessionario-committente-display-column.component.html',
	styleUrls: ['./cessionario-committente-display-column.component.scss']
})
export class AgalCessionarioCommittenteDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
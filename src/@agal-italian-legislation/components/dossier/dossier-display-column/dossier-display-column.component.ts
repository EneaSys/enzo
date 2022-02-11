import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'agal-dossier-display-column',
	templateUrl: './dossier-display-column.component.html',
	styleUrls: ['./dossier-display-column.component.scss']
})
export class AgalDossierDisplayColumnComponent {

	@Input() dc: string[];
    @Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dati-pagamento-display-column',
	templateUrl: './dati-pagamento-display-column.component.html',
	styleUrls: ['./dati-pagamento-display-column.component.scss']
})
export class AigDatiPagamentoDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
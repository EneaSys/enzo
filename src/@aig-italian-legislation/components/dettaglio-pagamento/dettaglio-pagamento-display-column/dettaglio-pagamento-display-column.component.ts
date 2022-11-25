import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'aig-dettaglio-pagamento-display-column',
	templateUrl: './dettaglio-pagamento-display-column.component.html',
	styleUrls: ['./dettaglio-pagamento-display-column.component.scss']
})
export class AigDettaglioPagamentoDisplayColumnComponent {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor() { }

	cambia(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}
}
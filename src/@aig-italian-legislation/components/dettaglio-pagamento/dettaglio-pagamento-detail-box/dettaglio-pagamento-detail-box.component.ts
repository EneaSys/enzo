import { Component, Input, OnInit } from '@angular/core';
import { AigDettaglioPagamentoDTO } from '../../../class/dettaglio-pagamento-dto.class';

@Component({
	selector: 'aig-dettaglio-pagamento-detail-box',
	templateUrl: './dettaglio-pagamento-detail-box.component.html',
	styleUrls: ['./dettaglio-pagamento-detail-box.component.scss']
})
export class AigDettaglioPagamentoDetailBoxComponent {

	@Input()
	dettaglioPagamento: AigDettaglioPagamentoDTO;

	constructor( ) { }
}
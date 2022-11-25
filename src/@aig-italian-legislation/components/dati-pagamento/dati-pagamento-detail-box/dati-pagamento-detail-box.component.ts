import { Component, Input, OnInit } from '@angular/core';
import { AigDatiPagamentoDTO } from '../../../class/dati-pagamento-dto.class';

@Component({
	selector: 'aig-dati-pagamento-detail-box',
	templateUrl: './dati-pagamento-detail-box.component.html',
	styleUrls: ['./dati-pagamento-detail-box.component.scss']
})
export class AigDatiPagamentoDetailBoxComponent {

	@Input()
	datiPagamento: AigDatiPagamentoDTO;

	constructor( ) { }
}
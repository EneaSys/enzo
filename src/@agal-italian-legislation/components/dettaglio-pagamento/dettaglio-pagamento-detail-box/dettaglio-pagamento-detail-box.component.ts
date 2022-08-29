import { Component, Input, OnInit } from '@angular/core';
import { DettaglioPagamentoDTO } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dettaglio-pagamento-detail-box',
    templateUrl: './dettaglio-pagamento-detail-box.component.html',
    styleUrls: ['./dettaglio-pagamento-detail-box.component.scss']
})
export class AgalDettaglioPagamentoDetailBoxComponent {

	@Input()
    dettaglioPagamento: DettaglioPagamentoDTO;

	constructor( ) { }
}
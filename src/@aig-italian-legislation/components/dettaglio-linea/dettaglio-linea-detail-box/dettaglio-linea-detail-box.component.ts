import { Component, Input, OnInit } from '@angular/core';
import { AigDettaglioLineaDTO } from '../../../class/dettaglio-linea-dto.class';

@Component({
	selector: 'aig-dettaglio-linea-detail-box',
	templateUrl: './dettaglio-linea-detail-box.component.html',
	styleUrls: ['./dettaglio-linea-detail-box.component.scss']
})
export class AigDettaglioLineaDetailBoxComponent {

	@Input()
	dettaglioLinea: AigDettaglioLineaDTO;

	constructor( ) { }
}
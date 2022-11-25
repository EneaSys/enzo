import { Component, Input, OnInit } from '@angular/core';
import { AigRiferimentoNumeroLineaDTO } from '../../../class/riferimento-numero-linea-dto.class';

@Component({
	selector: 'aig-riferimento-numero-linea-detail-box',
	templateUrl: './riferimento-numero-linea-detail-box.component.html',
	styleUrls: ['./riferimento-numero-linea-detail-box.component.scss']
})
export class AigRiferimentoNumeroLineaDetailBoxComponent {

	@Input()
	riferimentoNumeroLinea: AigRiferimentoNumeroLineaDTO;

	constructor( ) { }
}
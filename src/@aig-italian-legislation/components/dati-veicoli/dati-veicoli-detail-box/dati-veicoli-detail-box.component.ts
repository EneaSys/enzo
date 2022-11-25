import { Component, Input, OnInit } from '@angular/core';
import { AigDatiVeicoliDTO } from '../../../class/dati-veicoli-dto.class';

@Component({
	selector: 'aig-dati-veicoli-detail-box',
	templateUrl: './dati-veicoli-detail-box.component.html',
	styleUrls: ['./dati-veicoli-detail-box.component.scss']
})
export class AigDatiVeicoliDetailBoxComponent {

	@Input()
	datiVeicoli: AigDatiVeicoliDTO;

	constructor( ) { }
}
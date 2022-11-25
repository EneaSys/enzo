import { Component, Input, OnInit } from '@angular/core';
import { AigDatiRitenutaDTO } from '../../../class/dati-ritenuta-dto.class';

@Component({
	selector: 'aig-dati-ritenuta-detail-box',
	templateUrl: './dati-ritenuta-detail-box.component.html',
	styleUrls: ['./dati-ritenuta-detail-box.component.scss']
})
export class AigDatiRitenutaDetailBoxComponent {

	@Input()
	datiRitenuta: AigDatiRitenutaDTO;

	constructor( ) { }
}
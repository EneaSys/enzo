import { Component, Input, OnInit } from '@angular/core';
import { AigDatiOrdineAcquistoDTO } from '../../../class/dati-ordine-acquisto-dto.class';

@Component({
	selector: 'aig-dati-ordine-acquisto-detail-box',
	templateUrl: './dati-ordine-acquisto-detail-box.component.html',
	styleUrls: ['./dati-ordine-acquisto-detail-box.component.scss']
})
export class AigDatiOrdineAcquistoDetailBoxComponent {

	@Input()
	datiOrdineAcquisto: AigDatiOrdineAcquistoDTO;

	constructor( ) { }
}
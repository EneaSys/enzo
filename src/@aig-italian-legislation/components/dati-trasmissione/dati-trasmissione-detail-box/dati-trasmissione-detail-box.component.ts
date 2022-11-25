import { Component, Input, OnInit } from '@angular/core';
import { AigDatiTrasmissioneDTO } from '../../../class/dati-trasmissione-dto.class';

@Component({
	selector: 'aig-dati-trasmissione-detail-box',
	templateUrl: './dati-trasmissione-detail-box.component.html',
	styleUrls: ['./dati-trasmissione-detail-box.component.scss']
})
export class AigDatiTrasmissioneDetailBoxComponent {

	@Input()
	datiTrasmissione: AigDatiTrasmissioneDTO;

	constructor( ) { }
}
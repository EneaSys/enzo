import { Component, Input, OnInit } from '@angular/core';
import { AigDatiRicezioneDTO } from '../../../class/dati-ricezione-dto.class';

@Component({
	selector: 'aig-dati-ricezione-detail-box',
	templateUrl: './dati-ricezione-detail-box.component.html',
	styleUrls: ['./dati-ricezione-detail-box.component.scss']
})
export class AigDatiRicezioneDetailBoxComponent {

	@Input()
	datiRicezione: AigDatiRicezioneDTO;

	constructor( ) { }
}
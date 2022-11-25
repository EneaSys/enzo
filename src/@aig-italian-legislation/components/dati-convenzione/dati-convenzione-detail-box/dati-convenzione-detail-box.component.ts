import { Component, Input, OnInit } from '@angular/core';
import { AigDatiConvenzioneDTO } from '../../../class/dati-convenzione-dto.class';

@Component({
	selector: 'aig-dati-convenzione-detail-box',
	templateUrl: './dati-convenzione-detail-box.component.html',
	styleUrls: ['./dati-convenzione-detail-box.component.scss']
})
export class AigDatiConvenzioneDetailBoxComponent {

	@Input()
	datiConvenzione: AigDatiConvenzioneDTO;

	constructor( ) { }
}
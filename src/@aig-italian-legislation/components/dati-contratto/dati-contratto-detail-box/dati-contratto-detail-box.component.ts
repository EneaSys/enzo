import { Component, Input, OnInit } from '@angular/core';
import { AigDatiContrattoDTO } from '../../../class/dati-contratto-dto.class';

@Component({
	selector: 'aig-dati-contratto-detail-box',
	templateUrl: './dati-contratto-detail-box.component.html',
	styleUrls: ['./dati-contratto-detail-box.component.scss']
})
export class AigDatiContrattoDetailBoxComponent {

	@Input()
	datiContratto: AigDatiContrattoDTO;

	constructor( ) { }
}
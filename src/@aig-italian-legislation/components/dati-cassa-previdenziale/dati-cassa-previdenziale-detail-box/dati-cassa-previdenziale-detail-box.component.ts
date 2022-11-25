import { Component, Input, OnInit } from '@angular/core';
import { AigDatiCassaPrevidenzialeDTO } from '../../../class/dati-cassa-previdenziale-dto.class';

@Component({
	selector: 'aig-dati-cassa-previdenziale-detail-box',
	templateUrl: './dati-cassa-previdenziale-detail-box.component.html',
	styleUrls: ['./dati-cassa-previdenziale-detail-box.component.scss']
})
export class AigDatiCassaPrevidenzialeDetailBoxComponent {

	@Input()
	datiCassaPrevidenziale: AigDatiCassaPrevidenzialeDTO;

	constructor( ) { }
}
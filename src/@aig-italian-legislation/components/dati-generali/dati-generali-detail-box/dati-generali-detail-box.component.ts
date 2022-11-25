import { Component, Input, OnInit } from '@angular/core';
import { AigDatiGeneraliDTO } from '../../../class/dati-generali-dto.class';

@Component({
	selector: 'aig-dati-generali-detail-box',
	templateUrl: './dati-generali-detail-box.component.html',
	styleUrls: ['./dati-generali-detail-box.component.scss']
})
export class AigDatiGeneraliDetailBoxComponent {

	@Input()
	datiGenerali: AigDatiGeneraliDTO;

	constructor( ) { }
}
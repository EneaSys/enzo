import { Component, Input, OnInit } from '@angular/core';
import { AigDatiFattureCollegateDTO } from '../../../class/dati-fatture-collegate-dto.class';

@Component({
	selector: 'aig-dati-fatture-collegate-detail-box',
	templateUrl: './dati-fatture-collegate-detail-box.component.html',
	styleUrls: ['./dati-fatture-collegate-detail-box.component.scss']
})
export class AigDatiFattureCollegateDetailBoxComponent {

	@Input()
	datiFattureCollegate: AigDatiFattureCollegateDTO;

	constructor( ) { }
}
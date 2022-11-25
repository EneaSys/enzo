import { Component, Input, OnInit } from '@angular/core';
import { AigDatiSalDTO } from '../../../class/dati-sal-dto.class';

@Component({
	selector: 'aig-dati-sal-detail-box',
	templateUrl: './dati-sal-detail-box.component.html',
	styleUrls: ['./dati-sal-detail-box.component.scss']
})
export class AigDatiSalDetailBoxComponent {

	@Input()
	datiSal: AigDatiSalDTO;

	constructor( ) { }
}
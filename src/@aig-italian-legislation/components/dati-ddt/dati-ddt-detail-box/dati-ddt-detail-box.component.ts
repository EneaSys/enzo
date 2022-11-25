import { Component, Input, OnInit } from '@angular/core';
import { AigDatiDdtDTO } from '../../../class/dati-ddt-dto.class';

@Component({
	selector: 'aig-dati-ddt-detail-box',
	templateUrl: './dati-ddt-detail-box.component.html',
	styleUrls: ['./dati-ddt-detail-box.component.scss']
})
export class AigDatiDdtDetailBoxComponent {

	@Input()
	datiDdt: AigDatiDdtDTO;

	constructor( ) { }
}
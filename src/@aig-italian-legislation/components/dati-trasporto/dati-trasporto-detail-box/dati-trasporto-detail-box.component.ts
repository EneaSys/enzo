import { Component, Input, OnInit } from '@angular/core';
import { AigDatiTrasportoDTO } from '../../../class/dati-trasporto-dto.class';

@Component({
	selector: 'aig-dati-trasporto-detail-box',
	templateUrl: './dati-trasporto-detail-box.component.html',
	styleUrls: ['./dati-trasporto-detail-box.component.scss']
})
export class AigDatiTrasportoDetailBoxComponent {

	@Input()
	datiTrasporto: AigDatiTrasportoDTO;

	constructor( ) { }
}
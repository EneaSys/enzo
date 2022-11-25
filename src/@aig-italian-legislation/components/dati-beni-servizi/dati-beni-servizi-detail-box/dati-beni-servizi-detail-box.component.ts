import { Component, Input, OnInit } from '@angular/core';
import { AigDatiBeniServiziDTO } from '../../../class/dati-beni-servizi-dto.class';

@Component({
	selector: 'aig-dati-beni-servizi-detail-box',
	templateUrl: './dati-beni-servizi-detail-box.component.html',
	styleUrls: ['./dati-beni-servizi-detail-box.component.scss']
})
export class AigDatiBeniServiziDetailBoxComponent {

	@Input()
	datiBeniServizi: AigDatiBeniServiziDTO;

	constructor( ) { }
}
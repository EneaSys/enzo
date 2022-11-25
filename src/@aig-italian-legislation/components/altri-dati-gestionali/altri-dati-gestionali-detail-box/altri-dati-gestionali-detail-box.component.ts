import { Component, Input, OnInit } from '@angular/core';
import { AigAltriDatiGestionaliDTO } from '../../../class/altri-dati-gestionali-dto.class';

@Component({
	selector: 'aig-altri-dati-gestionali-detail-box',
	templateUrl: './altri-dati-gestionali-detail-box.component.html',
	styleUrls: ['./altri-dati-gestionali-detail-box.component.scss']
})
export class AigAltriDatiGestionaliDetailBoxComponent {

	@Input()
	altriDatiGestionali: AigAltriDatiGestionaliDTO;

	constructor( ) { }
}
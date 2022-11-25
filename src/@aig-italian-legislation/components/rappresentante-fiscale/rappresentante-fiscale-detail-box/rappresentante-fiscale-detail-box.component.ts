import { Component, Input, OnInit } from '@angular/core';
import { AigRappresentanteFiscaleDTO } from '../../../class/rappresentante-fiscale-dto.class';

@Component({
	selector: 'aig-rappresentante-fiscale-detail-box',
	templateUrl: './rappresentante-fiscale-detail-box.component.html',
	styleUrls: ['./rappresentante-fiscale-detail-box.component.scss']
})
export class AigRappresentanteFiscaleDetailBoxComponent {

	@Input()
	rappresentanteFiscale: AigRappresentanteFiscaleDTO;

	constructor( ) { }
}
import { Component, Input, OnInit } from '@angular/core';
import { AigIndirizzoResaDTO } from '../../../class/indirizzo-resa-dto.class';

@Component({
	selector: 'aig-indirizzo-resa-detail-box',
	templateUrl: './indirizzo-resa-detail-box.component.html',
	styleUrls: ['./indirizzo-resa-detail-box.component.scss']
})
export class AigIndirizzoResaDetailBoxComponent {

	@Input()
	indirizzoResa: AigIndirizzoResaDTO;

	constructor( ) { }
}
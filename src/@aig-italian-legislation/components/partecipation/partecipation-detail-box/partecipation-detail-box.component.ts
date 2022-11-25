import { Component, Input, OnInit } from '@angular/core';
import { AigPartecipationDTO } from '../../../class/partecipation-dto.class';

@Component({
	selector: 'aig-partecipation-detail-box',
	templateUrl: './partecipation-detail-box.component.html',
	styleUrls: ['./partecipation-detail-box.component.scss']
})
export class AigPartecipationDetailBoxComponent {

	@Input()
	partecipation: AigPartecipationDTO;

	constructor( ) { }
}
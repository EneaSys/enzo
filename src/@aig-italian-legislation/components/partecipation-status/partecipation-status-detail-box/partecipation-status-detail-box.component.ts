import { Component, Input, OnInit } from '@angular/core';
import { AigPartecipationStatusDTO } from '../../../class/partecipation-status-dto.class';

@Component({
	selector: 'aig-partecipation-status-detail-box',
	templateUrl: './partecipation-status-detail-box.component.html',
	styleUrls: ['./partecipation-status-detail-box.component.scss']
})
export class AigPartecipationStatusDetailBoxComponent {

	@Input()
	partecipationStatus: AigPartecipationStatusDTO;

	constructor( ) { }
}
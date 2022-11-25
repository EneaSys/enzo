import { Component, Input, OnInit } from '@angular/core';
import { AigPartecipationModalityDTO } from '../../../class/partecipation-modality-dto.class';

@Component({
	selector: 'aig-partecipation-modality-detail-box',
	templateUrl: './partecipation-modality-detail-box.component.html',
	styleUrls: ['./partecipation-modality-detail-box.component.scss']
})
export class AigPartecipationModalityDetailBoxComponent {

	@Input()
	partecipationModality: AigPartecipationModalityDTO;

	constructor( ) { }
}
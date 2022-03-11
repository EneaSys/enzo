import { Component, Input, OnInit } from '@angular/core';
import { PartecipationModalityDTO } from 'aig-italianlegislation';

@Component({
    selector: 'agal-partecipation-modality-detail-box',
    templateUrl: './partecipation-modality-detail-box.component.html',
    styleUrls: ['./partecipation-modality-detail-box.component.scss']
})
export class AgalPartecipationModalityDetailBoxComponent {

	@Input()
    partecipationModality: PartecipationModalityDTO;

	constructor( ) { }
}
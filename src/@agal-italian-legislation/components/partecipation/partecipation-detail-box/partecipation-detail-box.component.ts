import { Component, Input, OnInit } from '@angular/core';
import { PartecipationDTO } from 'aig-italianlegislation';

@Component({
    selector: 'agal-partecipation-detail-box',
    templateUrl: './partecipation-detail-box.component.html',
    styleUrls: ['./partecipation-detail-box.component.scss']
})
export class AgalPartecipationDetailBoxComponent {

	@Input()
    partecipation: PartecipationDTO;

	constructor( ) { }
}
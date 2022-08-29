import { Component, Input, OnInit } from '@angular/core';
import { PartecipationStatusDTO } from 'aig-italianlegislation';

@Component({
    selector: 'agal-partecipation-status-detail-box',
    templateUrl: './partecipation-status-detail-box.component.html',
    styleUrls: ['./partecipation-status-detail-box.component.scss']
})
export class AgalPartecipationStatusDetailBoxComponent {

	@Input()
    partecipationStatus: PartecipationStatusDTO;

	constructor( ) { }
}
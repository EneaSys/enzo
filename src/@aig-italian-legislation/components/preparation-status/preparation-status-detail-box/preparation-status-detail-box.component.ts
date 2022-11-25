import { Component, Input, OnInit } from '@angular/core';
import { AigPreparationStatusDTO } from '../../../class/preparation-status-dto.class';

@Component({
	selector: 'aig-preparation-status-detail-box',
	templateUrl: './preparation-status-detail-box.component.html',
	styleUrls: ['./preparation-status-detail-box.component.scss']
})
export class AigPreparationStatusDetailBoxComponent {

	@Input()
	preparationStatus: AigPreparationStatusDTO;

	constructor( ) { }
}
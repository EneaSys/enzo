import { Component, Input, OnInit } from '@angular/core';
import { AigPreparationModalityDTO } from '../../../class/preparation-modality-dto.class';

@Component({
	selector: 'aig-preparation-modality-detail-box',
	templateUrl: './preparation-modality-detail-box.component.html',
	styleUrls: ['./preparation-modality-detail-box.component.scss']
})
export class AigPreparationModalityDetailBoxComponent {

	@Input()
	preparationModality: AigPreparationModalityDTO;

	constructor( ) { }
}
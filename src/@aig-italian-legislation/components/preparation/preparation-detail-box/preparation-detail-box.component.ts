import { Component, Input, OnInit } from '@angular/core';
import { AigPreparationDTO } from '../../../class/preparation-dto.class';

@Component({
	selector: 'aig-preparation-detail-box',
	templateUrl: './preparation-detail-box.component.html',
	styleUrls: ['./preparation-detail-box.component.scss']
})
export class AigPreparationDetailBoxComponent {

	@Input()
	preparation: AigPreparationDTO;

	constructor( ) { }
}
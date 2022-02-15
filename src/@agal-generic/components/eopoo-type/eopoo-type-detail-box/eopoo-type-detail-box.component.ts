import { Component, Input, OnInit } from '@angular/core';
import { EopooTypeDTO } from 'aig-generic';

@Component({
	selector: 'agal-eopoo-type-detail-box',
	templateUrl: './eopoo-type-detail-box.component.html',
	styleUrls: ['./eopoo-type-detail-box.component.scss']
})
export class AgalEopooTypeDetailBoxComponent {
	@Input()
	eopooType: EopooTypeDTO;

	constructor( ) { }

}
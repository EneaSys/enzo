import { Component, Input, OnInit } from '@angular/core';
import { PreparationDTO } from 'aig-italianlegislation';

@Component({
    selector: 'agal-preparation-detail-box',
    templateUrl: './preparation-detail-box.component.html',
    styleUrls: ['./preparation-detail-box.component.scss']
})
export class AgalPreparationDetailBoxComponent {

	@Input()
    preparation: PreparationDTO;

	constructor( ) { }
}
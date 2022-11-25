import { Component, Input, OnInit } from '@angular/core';
import { AigCedentePrestatoreDTO } from '../../../class/cedente-prestatore-dto.class';

@Component({
	selector: 'aig-cedente-prestatore-detail-box',
	templateUrl: './cedente-prestatore-detail-box.component.html',
	styleUrls: ['./cedente-prestatore-detail-box.component.scss']
})
export class AigCedentePrestatoreDetailBoxComponent {

	@Input()
	cedentePrestatore: AigCedentePrestatoreDTO;

	constructor( ) { }
}
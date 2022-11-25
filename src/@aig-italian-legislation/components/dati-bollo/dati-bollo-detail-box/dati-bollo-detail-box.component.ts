import { Component, Input, OnInit } from '@angular/core';
import { AigDatiBolloDTO } from '../../../class/dati-bollo-dto.class';

@Component({
	selector: 'aig-dati-bollo-detail-box',
	templateUrl: './dati-bollo-detail-box.component.html',
	styleUrls: ['./dati-bollo-detail-box.component.scss']
})
export class AigDatiBolloDetailBoxComponent {

	@Input()
	datiBollo: AigDatiBolloDTO;

	constructor( ) { }
}
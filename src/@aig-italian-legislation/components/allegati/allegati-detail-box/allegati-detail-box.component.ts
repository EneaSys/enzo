import { Component, Input, OnInit } from '@angular/core';
import { AigAllegatiDTO } from '../../../class/allegati-dto.class';

@Component({
	selector: 'aig-allegati-detail-box',
	templateUrl: './allegati-detail-box.component.html',
	styleUrls: ['./allegati-detail-box.component.scss']
})
export class AigAllegatiDetailBoxComponent {

	@Input()
	allegati: AigAllegatiDTO;

	constructor( ) { }
}
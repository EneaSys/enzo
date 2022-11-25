import { Component, Input, OnInit } from '@angular/core';
import { AigScontoMaggiorazioneDTO } from '../../../class/sconto-maggiorazione-dto.class';

@Component({
	selector: 'aig-sconto-maggiorazione-detail-box',
	templateUrl: './sconto-maggiorazione-detail-box.component.html',
	styleUrls: ['./sconto-maggiorazione-detail-box.component.scss']
})
export class AigScontoMaggiorazioneDetailBoxComponent {

	@Input()
	scontoMaggiorazione: AigScontoMaggiorazioneDTO;

	constructor( ) { }
}
import { Component, Input, OnInit } from '@angular/core';
import { AigScontoMaggiorazioneLineaDTO } from '../../../class/sconto-maggiorazione-linea-dto.class';

@Component({
	selector: 'aig-sconto-maggiorazione-linea-detail-box',
	templateUrl: './sconto-maggiorazione-linea-detail-box.component.html',
	styleUrls: ['./sconto-maggiorazione-linea-detail-box.component.scss']
})
export class AigScontoMaggiorazioneLineaDetailBoxComponent {

	@Input()
	scontoMaggiorazioneLinea: AigScontoMaggiorazioneLineaDTO;

	constructor( ) { }
}
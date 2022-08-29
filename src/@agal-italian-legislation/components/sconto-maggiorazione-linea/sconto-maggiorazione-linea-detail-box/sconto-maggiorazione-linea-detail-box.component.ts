import { Component, Input, OnInit } from '@angular/core';
import { ScontoMaggiorazioneLineaDTO } from 'aig-italianlegislation';

@Component({
    selector: 'agal-sconto-maggiorazione-linea-detail-box',
    templateUrl: './sconto-maggiorazione-linea-detail-box.component.html',
    styleUrls: ['./sconto-maggiorazione-linea-detail-box.component.scss']
})
export class AgalScontoMaggiorazioneLineaDetailBoxComponent {

	@Input()
    scontoMaggiorazioneLinea: ScontoMaggiorazioneLineaDTO;

	constructor( ) { }
}
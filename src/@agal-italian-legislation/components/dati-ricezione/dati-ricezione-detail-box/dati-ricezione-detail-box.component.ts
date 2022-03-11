import { Component, Input, OnInit } from '@angular/core';
import { DatiRicezioneDTO } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-ricezione-detail-box',
    templateUrl: './dati-ricezione-detail-box.component.html',
    styleUrls: ['./dati-ricezione-detail-box.component.scss']
})
export class AgalDatiRicezioneDetailBoxComponent {

	@Input()
    datiRicezione: DatiRicezioneDTO;

	constructor( ) { }
}
import { Component, Input, OnInit } from '@angular/core';
import { DatiTrasportoDTO } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-trasporto-detail-box',
    templateUrl: './dati-trasporto-detail-box.component.html',
    styleUrls: ['./dati-trasporto-detail-box.component.scss']
})
export class AgalDatiTrasportoDetailBoxComponent {

	@Input()
    datiTrasporto: DatiTrasportoDTO;

	constructor( ) { }
}
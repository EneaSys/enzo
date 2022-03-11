import { Component, Input, OnInit } from '@angular/core';
import { FatturaElettronicaBodyDTO } from 'aig-italianlegislation';

@Component({
    selector: 'agal-fattura-elettronica-body-detail-box',
    templateUrl: './fattura-elettronica-body-detail-box.component.html',
    styleUrls: ['./fattura-elettronica-body-detail-box.component.scss']
})
export class AgalFatturaElettronicaBodyDetailBoxComponent {

	@Input()
    fatturaElettronicaBody: FatturaElettronicaBodyDTO;

	constructor( ) { }
}
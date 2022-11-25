import { Component, Input, OnInit } from '@angular/core';
import { AigFatturaElettronicaBodyDTO } from '../../../class/fattura-elettronica-body-dto.class';

@Component({
	selector: 'aig-fattura-elettronica-body-detail-box',
	templateUrl: './fattura-elettronica-body-detail-box.component.html',
	styleUrls: ['./fattura-elettronica-body-detail-box.component.scss']
})
export class AigFatturaElettronicaBodyDetailBoxComponent {

	@Input()
	fatturaElettronicaBody: AigFatturaElettronicaBodyDTO;

	constructor( ) { }
}
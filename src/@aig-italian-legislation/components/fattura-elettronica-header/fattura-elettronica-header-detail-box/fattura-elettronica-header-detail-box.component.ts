import { Component, Input, OnInit } from '@angular/core';
import { AigFatturaElettronicaHeaderDTO } from '../../../class/fattura-elettronica-header-dto.class';

@Component({
	selector: 'aig-fattura-elettronica-header-detail-box',
	templateUrl: './fattura-elettronica-header-detail-box.component.html',
	styleUrls: ['./fattura-elettronica-header-detail-box.component.scss']
})
export class AigFatturaElettronicaHeaderDetailBoxComponent {

	@Input()
	fatturaElettronicaHeader: AigFatturaElettronicaHeaderDTO;

	constructor( ) { }
}
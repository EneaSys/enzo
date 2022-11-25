import { Component, Input, OnInit } from '@angular/core';
import { AigFatturaPrincipaleDTO } from '../../../class/fattura-principale-dto.class';

@Component({
	selector: 'aig-fattura-principale-detail-box',
	templateUrl: './fattura-principale-detail-box.component.html',
	styleUrls: ['./fattura-principale-detail-box.component.scss']
})
export class AigFatturaPrincipaleDetailBoxComponent {

	@Input()
	fatturaPrincipale: AigFatturaPrincipaleDTO;

	constructor( ) { }
}
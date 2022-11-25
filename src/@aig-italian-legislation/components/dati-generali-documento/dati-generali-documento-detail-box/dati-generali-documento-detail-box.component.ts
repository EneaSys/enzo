import { Component, Input, OnInit } from '@angular/core';
import { AigDatiGeneraliDocumentoDTO } from '../../../class/dati-generali-documento-dto.class';

@Component({
	selector: 'aig-dati-generali-documento-detail-box',
	templateUrl: './dati-generali-documento-detail-box.component.html',
	styleUrls: ['./dati-generali-documento-detail-box.component.scss']
})
export class AigDatiGeneraliDocumentoDetailBoxComponent {

	@Input()
	datiGeneraliDocumento: AigDatiGeneraliDocumentoDTO;

	constructor( ) { }
}
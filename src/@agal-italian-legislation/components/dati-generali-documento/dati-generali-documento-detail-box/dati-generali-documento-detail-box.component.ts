import { Component, Input, OnInit } from '@angular/core';
import { DatiGeneraliDocumentoDTO } from 'aig-italianlegislation';

@Component({
    selector: 'agal-dati-generali-documento-detail-box',
    templateUrl: './dati-generali-documento-detail-box.component.html',
    styleUrls: ['./dati-generali-documento-detail-box.component.scss']
})
export class AgalDatiGeneraliDocumentoDetailBoxComponent {

	@Input()
    datiGeneraliDocumento: DatiGeneraliDocumentoDTO;

	constructor( ) { }
}
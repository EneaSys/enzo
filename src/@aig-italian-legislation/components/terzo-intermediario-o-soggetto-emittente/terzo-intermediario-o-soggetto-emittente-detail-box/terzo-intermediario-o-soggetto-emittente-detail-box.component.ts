import { Component, Input, OnInit } from '@angular/core';
import { AigTerzoIntermediarioOSoggettoEmittenteDTO } from '../../../class/terzo-intermediario-o-soggetto-emittente-dto.class';

@Component({
	selector: 'aig-terzo-intermediario-o-soggetto-emittente-detail-box',
	templateUrl: './terzo-intermediario-o-soggetto-emittente-detail-box.component.html',
	styleUrls: ['./terzo-intermediario-o-soggetto-emittente-detail-box.component.scss']
})
export class AigTerzoIntermediarioOSoggettoEmittenteDetailBoxComponent {

	@Input()
	terzoIntermediarioOSoggettoEmittente: AigTerzoIntermediarioOSoggettoEmittenteDTO;

	constructor( ) { }
}
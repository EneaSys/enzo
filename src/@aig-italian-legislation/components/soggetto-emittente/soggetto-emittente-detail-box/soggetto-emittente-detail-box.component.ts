import { Component, Input, OnInit } from '@angular/core';
import { AigSoggettoEmittenteDTO } from '../../../class/soggetto-emittente-dto.class';

@Component({
	selector: 'aig-soggetto-emittente-detail-box',
	templateUrl: './soggetto-emittente-detail-box.component.html',
	styleUrls: ['./soggetto-emittente-detail-box.component.scss']
})
export class AigSoggettoEmittenteDetailBoxComponent {

	@Input()
	soggettoEmittente: AigSoggettoEmittenteDTO;

	constructor( ) { }
}
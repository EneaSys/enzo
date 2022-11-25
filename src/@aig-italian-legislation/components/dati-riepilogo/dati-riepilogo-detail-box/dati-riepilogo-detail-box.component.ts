import { Component, Input, OnInit } from '@angular/core';
import { AigDatiRiepilogoDTO } from '../../../class/dati-riepilogo-dto.class';

@Component({
	selector: 'aig-dati-riepilogo-detail-box',
	templateUrl: './dati-riepilogo-detail-box.component.html',
	styleUrls: ['./dati-riepilogo-detail-box.component.scss']
})
export class AigDatiRiepilogoDetailBoxComponent {

	@Input()
	datiRiepilogo: AigDatiRiepilogoDTO;

	constructor( ) { }
}
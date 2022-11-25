import { Component, Input, OnInit } from '@angular/core';
import { AigCessionarioCommittenteDTO } from '../../../class/cessionario-committente-dto.class';

@Component({
	selector: 'aig-cessionario-committente-detail-box',
	templateUrl: './cessionario-committente-detail-box.component.html',
	styleUrls: ['./cessionario-committente-detail-box.component.scss']
})
export class AigCessionarioCommittenteDetailBoxComponent {

	@Input()
	cessionarioCommittente: AigCessionarioCommittenteDTO;

	constructor( ) { }
}
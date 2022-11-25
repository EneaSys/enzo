import { Component, Input, OnInit } from '@angular/core';
import { AigDossierDTO } from '../../../class/dossier-dto.class';

@Component({
	selector: 'aig-dossier-detail-box',
	templateUrl: './dossier-detail-box.component.html',
	styleUrls: ['./dossier-detail-box.component.scss']
})
export class AigDossierDetailBoxComponent {

	@Input()
	dossier: AigDossierDTO;

	constructor( ) { }
}
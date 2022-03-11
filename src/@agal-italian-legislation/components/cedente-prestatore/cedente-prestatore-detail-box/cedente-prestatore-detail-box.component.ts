import { Component, Input, OnInit } from '@angular/core';
import { CedentePrestatoreDTO } from 'aig-italianlegislation';

@Component({
    selector: 'agal-cedente-prestatore-detail-box',
    templateUrl: './cedente-prestatore-detail-box.component.html',
    styleUrls: ['./cedente-prestatore-detail-box.component.scss']
})
export class AgalCedentePrestatoreDetailBoxComponent {

	@Input()
    cedentePrestatore: CedentePrestatoreDTO;

	constructor( ) { }
}
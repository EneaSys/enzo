import { Component, Input, OnInit } from '@angular/core';
import { AigProcurementLotCategoryDTO } from '../../../class/procurement-lot-category-dto.class';

@Component({
	selector: 'aig-procurement-lot-category-detail-box',
	templateUrl: './procurement-lot-category-detail-box.component.html',
	styleUrls: ['./procurement-lot-category-detail-box.component.scss']
})
export class AigProcurementLotCategoryDetailBoxComponent {

	@Input()
	procurementLotCategory: AigProcurementLotCategoryDTO;

	constructor( ) { }
}
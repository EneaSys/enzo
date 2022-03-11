import { Component, Input, OnInit } from '@angular/core';
import { ProcurementLotCategoryDTO } from 'aig-italianlegislation';

@Component({
    selector: 'agal-procurement-lot-category-detail-box',
    templateUrl: './procurement-lot-category-detail-box.component.html',
    styleUrls: ['./procurement-lot-category-detail-box.component.scss']
})
export class AgalProcurementLotCategoryDetailBoxComponent {

	@Input()
    procurementLotCategory: ProcurementLotCategoryDTO;

	constructor( ) { }
}
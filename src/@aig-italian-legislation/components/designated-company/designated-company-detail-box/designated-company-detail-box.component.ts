import { Component, Input, OnInit } from '@angular/core';
import { AigDesignatedCompanyDTO } from '../../../class/designated-company-dto.class';

@Component({
	selector: 'aig-designated-company-detail-box',
	templateUrl: './designated-company-detail-box.component.html',
	styleUrls: ['./designated-company-detail-box.component.scss']
})
export class AigDesignatedCompanyDetailBoxComponent {

	@Input()
	designatedCompany: AigDesignatedCompanyDTO;

	constructor( ) { }
}
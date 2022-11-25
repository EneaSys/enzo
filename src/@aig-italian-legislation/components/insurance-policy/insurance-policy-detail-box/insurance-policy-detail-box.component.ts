import { Component, Input, OnInit } from '@angular/core';
import { AigInsurancePolicyDTO } from '../../../class/insurance-policy-dto.class';

@Component({
	selector: 'aig-insurance-policy-detail-box',
	templateUrl: './insurance-policy-detail-box.component.html',
	styleUrls: ['./insurance-policy-detail-box.component.scss']
})
export class AigInsurancePolicyDetailBoxComponent {

	@Input()
	insurancePolicy: AigInsurancePolicyDTO;

	constructor( ) { }
}
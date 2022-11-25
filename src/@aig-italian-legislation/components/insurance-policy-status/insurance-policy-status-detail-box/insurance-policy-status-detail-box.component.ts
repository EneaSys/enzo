import { Component, Input, OnInit } from '@angular/core';
import { AigInsurancePolicyStatusDTO } from '../../../class/insurance-policy-status-dto.class';

@Component({
	selector: 'aig-insurance-policy-status-detail-box',
	templateUrl: './insurance-policy-status-detail-box.component.html',
	styleUrls: ['./insurance-policy-status-detail-box.component.scss']
})
export class AigInsurancePolicyStatusDetailBoxComponent {

	@Input()
	insurancePolicyStatus: AigInsurancePolicyStatusDTO;

	constructor( ) { }
}
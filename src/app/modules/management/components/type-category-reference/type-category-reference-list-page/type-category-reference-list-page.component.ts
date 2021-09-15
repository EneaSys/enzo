import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
	selector: 'enzo-type-category-reference-list-page',
	templateUrl: './type-category-reference-list-page.component.html',
	styleUrls: ['./type-category-reference-list-page.component.scss']
})
export class EnzoTypeCategoryReferenceListPageComponent extends EnzoGenericComponent1 {
	constructor(
		_gcs: EnzoGenericComponentService1,
    ) { 
		super(_gcs);
		this.tmCurrentComponent.name = 'TypeCategoryReference';
	}


}
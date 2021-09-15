import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';


import { AgalCommonService } from './services/common.service';
import { AgalPaginatorComponent } from './components/paginator/paginator.component';

@NgModule({
	imports: [ 
		CommonModule,
		
		FormsModule,
        ReactiveFormsModule,
		FlexLayoutModule,
		
        DropdownModule,
	],
	providers: [
		AgalCommonService,
	],
	declarations: [
		AgalPaginatorComponent,
	],
	exports: [
		FlexLayoutModule,

		TableModule,
		ButtonModule,

		AgalPaginatorComponent,
	]
})
export class AgalCoreModule {}
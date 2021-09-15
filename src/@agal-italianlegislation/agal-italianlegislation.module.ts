import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AigItalianLegislationApiModule } from 'aig-italianlegislation';
import { AgalCoreModule } from '@agal-core/agal-core.module';

import { SplitButtonModule } from 'primeng/splitbutton';

import { MatIconModule } from '@angular/material/icon';


import { AgalPartecipationListLoaderComponent } from './components/partecipation/partecipation-list-loader/partecipation-list-loader.component';
import { AgalProcurementLotListLoaderComponent } from './components/procurement-lot/procurement-lot-list-loader/procurement-lot-list-loader.component';
import { AgalProcurementListLoaderComponent } from './components/procurement/procurement-list-loader/procurement-list-loader.component';
import { AgalGenericModule } from '@agal-generic/agal-generic.module';

@NgModule({
	imports: [ 
		CommonModule,
		
		AigItalianLegislationApiModule,
		AgalCoreModule,
		
		SplitButtonModule,

		MatIconModule,

		AgalGenericModule,

	],
	declarations: [
		AgalProcurementListLoaderComponent,
		AgalProcurementLotListLoaderComponent,
		AgalPartecipationListLoaderComponent,


	],
	exports: [
		AgalProcurementLotListLoaderComponent,
		AgalPartecipationListLoaderComponent,
		AgalProcurementListLoaderComponent,
		
	],
	providers: [
		
	],
})
export class AgalItalianLegislationModule {}
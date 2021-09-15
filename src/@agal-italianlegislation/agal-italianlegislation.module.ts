import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SplitButtonModule } from 'primeng/splitbutton';

import { AgalCoreModule } from '@agal-core/agal-core.module';

import { MatIconModule } from '@angular/material/icon';

import { AigItalianLegislationApiModule } from 'aig-italianlegislation';

import { AgalPartecipationListLoaderComponent } from './components/partecipation/partecipation-list-loader/partecipation-list-loader.component';
import { AgalProcurementLotListLoaderComponent } from './components/procurement-lot/procurement-lot-list-loader/procurement-lot-list-loader.component';
import { AgalProcurementListLoaderComponent } from './components/procurement/procurement-list-loader/procurement-list-loader.component';

@NgModule({
	imports: [ 
		CommonModule,

		AgalCoreModule,
		
		AigItalianLegislationApiModule,

		MatIconModule,

		SplitButtonModule,


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
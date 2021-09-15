import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgalCoreModule } from '@agal-core/agal-core.module';
import { EopooNamePipe } from './pipe/eopoo-name.pipe';


@NgModule({
	imports: [ 
		CommonModule,
		
		AgalCoreModule,


	],
	declarations: [
		EopooNamePipe,

	],
	exports: [
		EopooNamePipe,
	],
	providers: [
		
	],
})
export class AgalGenericModule {}
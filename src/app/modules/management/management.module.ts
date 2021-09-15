import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EnzoSharedModule } from 'app/shared/shared.module';

import { managementRoutes } from './management.route';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { EnzoApplicationModuleListPageComponent } from './components/application-module/application-module-list-page/application-module-list-page.component';

@NgModule({
	imports: [ 
		RouterModule.forChild(managementRoutes),
		EnzoSharedModule,


		MatSidenavModule,
		MatIconModule,

		
	],
	declarations: [
		EnzoApplicationModuleListPageComponent,
		
	],
	providers: [
		
	],
})
export class EnzoManagementModule {}
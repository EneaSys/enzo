import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { EnzoSharedModule } from 'app/shared/shared.module';

import { standardRoutes } from './aig-standard.route';

import { EnzoCityListPageComponent } from './components/city/city-list-page/city-list-page.component';
import { EnzoCityDetailPageComponent } from './components/city/city-detail-page/city-detail-page.component';


@NgModule({
    imports     : [
        RouterModule.forChild(standardRoutes),
		EnzoSharedModule,

		MatSidenavModule,
		MatIconModule,
    ],
	declarations: [
        EnzoCityListPageComponent,
		EnzoCityDetailPageComponent
    ],
})
export class EnzoStandardModule
{
}

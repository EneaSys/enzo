import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EnzoSharedModule } from 'app/shared/shared.module';

import { standardRoutes } from './standard.route';

import { EnzoCityListPageComponent } from './components/city/city-list-page/city-list-page.component';
import { EnzoCityDetailPageComponent } from './components/city/city-detail-page/city-detail-page.component';


@NgModule({
    imports     : [
        RouterModule.forChild(standardRoutes),
		EnzoSharedModule,
    ],
	declarations: [
        EnzoCityListPageComponent,
		EnzoCityDetailPageComponent
    ],
})
export class EnzoStandardModule { }

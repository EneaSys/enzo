import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { EnzoSharedModule } from 'app/shared/shared.module';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExampleComponent } from './components/example/example.component';
import { EnzoDetailPageComponent } from './components/detail-page/detail-page.component';
import { EnzoListPageComponent } from './components/list-page/list-page.component';
import { AgalItalianLegislationModule } from '@agal-italian-legislation/italian-legislation.module';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    },
	{
        path     : 'asd',
        component: EnzoDetailPageComponent,
	},
	{
        path     : 'asd/:id',
        component: EnzoDetailPageComponent,
	},
	{
        path     : 'list',
        component: EnzoListPageComponent,
		children : [
			{
				path     : ':id',
        		component: EnzoDetailPageComponent,
			}
		]
    },
];

@NgModule({
    declarations: [
        ExampleComponent,
		SidebarComponent,

		EnzoListPageComponent,
		EnzoDetailPageComponent,
    ],
    imports     : [
        RouterModule.forChild(exampleRoutes),
		
		EnzoSharedModule,

		AgalItalianLegislationModule,
    ]
})
export class ExampleModule
{
}

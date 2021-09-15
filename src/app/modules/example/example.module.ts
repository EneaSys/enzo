import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';

import { EnzoSharedModule } from 'app/shared/shared.module';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ExampleComponent } from './components/example/example.component';
import { ButtonModule } from 'primeng/button';
import { AgalCoreModule } from '@agal-core/agal-core.module';
import { AgalItalianLegislationModule } from '@agal-italianlegislation/agal-italianlegislation.module';

const exampleRoutes: Route[] = [
    {
        path     : '',
        component: ExampleComponent
    },
	{
        path     : 'asd',
        component: SidebarComponent,
		children : [
			{
				path     : ':numero',
        		component: SidebarComponent,
			}
		]
    }
];

@NgModule({
    declarations: [
        ExampleComponent,
		SidebarComponent
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

import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    {path: '', pathMatch : 'full', redirectTo: 'example'},

    {path: 'signed-in-redirect', pathMatch : 'full', redirectTo: 'example'},

    // Empty
    {
        path: '',
        component  : LayoutComponent,
        data: {
            layout: 'empty'
        },
        children   : [
            {path: 'landing', loadChildren: () => import('app/modules/home/home.module').then(m => m.LandingHomeModule)},
        ]
    },

    // Compact Layout
    {
        path        : '',
        component   : LayoutComponent,
        resolve     : {
            initialData: InitialDataResolver,
        },
		canActivate : [
			
		],
        children    : [
			{path: 'home', loadChildren: () => import('app/modules/example/example.module').then(m => m.ExampleModule)},
            {path: 'example', loadChildren: () => import('app/modules/example/example.module').then(m => m.ExampleModule)},
			{path: 'banana', loadChildren: () => import('app/modules/example/example.module').then(m => m.ExampleModule)},

			{path: 'm8t', loadChildren: () => import('app/modules/management/management.module').then(m => m.EnzoManagementModule)},
			{path: 'standard', loadChildren: () => import('app/modules/standard/standard.module').then(m => m.EnzoStandardModule)},
        ]
    }
];

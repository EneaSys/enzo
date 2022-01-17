import { Route } from '@angular/router';
import { LayoutComponent } from 'app/layout/layout.component';
import { InitialDataResolver } from 'app/app.resolvers';
import { EnzoAuthGuard } from './core/auth/auth.guard';
import { EnzoContextGuard } from './core/context/context.guard';
import { PigesAuthCallbackComponent } from '@piges-auth/piges-auth-callback.component';
import { PigesAuthLoginComponent } from '@piges-auth/piges-auth-login.component';

// @formatter:off
// tslint:disable:max-line-length
export const appRoutes: Route[] = [

    {
		path: '',
		pathMatch : 'full',
		redirectTo: 'landing'
	},

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


	// Login
	{
		path: 'login',
		pathMatch : 'full',
		redirectTo: 'piges/auth/login'
	},

	// Piges
	{
		path: 'piges/auth',
		children: [
			{
				path: 'login',
				component: PigesAuthLoginComponent,
			},
			{
				path: 'callback',
				component: PigesAuthCallbackComponent
			},
		]
	},
	

	// Select Context
	{
        path: 'select-context',
        component  : LayoutComponent,
        data: { layout: 'empty' },
		canActivate : [
			EnzoAuthGuard
		],
        children   : [
            {path: '', loadChildren: () => import('app/modules/select-context/select-context.module').then(m => m.SelectContextModule)},
        ]
    },


    // Compact Layout
    {
        path        : '',
        component   : LayoutComponent,
		canActivate : [
			EnzoAuthGuard, EnzoContextGuard
		],
        resolve     : {
            initialData: InitialDataResolver,
        },
        children    : [
			{path: 'home', loadChildren: () => import('app/modules/example/example.module').then(m => m.ExampleModule)},
            {path: 'example', loadChildren: () => import('app/modules/example/example.module').then(m => m.ExampleModule)},
			{path: 'banana', loadChildren: () => import('app/modules/example/example.module').then(m => m.ExampleModule)},

			{path: 'm8t', loadChildren: () => import('app/modules/management/management.module').then(m => m.EnzoManagementModule)},
			{path: 'standard', loadChildren: () => import('app/modules/standard/standard.module').then(m => m.EnzoStandardModule)},
            
			{path: 'generic', loadChildren: () => import('app/modules/enzo-generic/generic.module').then(m => m.EnzoGenericModule)},


        ]
    }
];

import { Route } from '@angular/router';

import { EnzoCityDetailPageComponent } from './components/city/city-detail-page/city-detail-page.component';
import { EnzoCityListPageComponent } from "./components/city/city-list-page/city-list-page.component";

export const standardRoutes: Route[] = [
	{
		path: '', 
		pathMatch : 'full',
		redirectTo: 'city'
	},
	{
        path      : 'city',
        pathMatch : 'full',
		redirectTo: 'city/list'
    },
	{
        path      : 'city/list',
        component : EnzoCityListPageComponent,
    },
	{
        path      : 'city/:code',
        component : EnzoCityDetailPageComponent,
    }
];
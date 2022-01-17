import { Route } from '@angular/router';

import {EnzoEopooTypeListPageComponent} from './components/eopoo-type/eopoo-type-list-page/eopoo-type-list-page.component';

import {EnzoEopooListPageComponent} from './components/eopoo/eopoo-list-page/eopoo-list-page.component';

import {EnzoAddressListPageComponent} from './components/address/address-list-page/address-list-page.component';

import {EnzoContactListPageComponent} from './components/contact/contact-list-page/contact-list-page.component';

import {EnzoReferentListPageComponent} from './components/referent/referent-list-page/referent-list-page.component';
import { EnzoEopooDetailPageComponent } from './components/eopoo/eopoo-detail-page/eopoo-detail-page.component';


export const genericRoutes: Route[] = [
	{
		path: '', 
		pathMatch : 'full',
		redirectTo: 'page'
	},

		{
			path: 'eopoo-type', 
			component: EnzoEopooTypeListPageComponent,
		},
            
		{
			path: 'eopoo', 
			component: EnzoEopooListPageComponent,
			children : [
				{
					path     : ':detail/:id',
					component: EnzoEopooDetailPageComponent,
				}
			]
		},
		{
			path     : 'detail/:id',
			component: EnzoEopooDetailPageComponent,
		},
            
		{
			path: 'address', 
			component: EnzoAddressListPageComponent,
		},
            
		{
			path: 'contact', 
			component: EnzoContactListPageComponent,
		},
            
		{
			path: 'referent', 
			component: EnzoReferentListPageComponent,
		},
            
    
];
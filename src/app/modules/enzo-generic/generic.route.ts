import { Route } from '@angular/router';

import {EnzoEopooTypeListPageComponent} from './components/eopoo-type/eopoo-type-list-page/eopoo-type-list-page.component';
import {EnzoEopooTypeDetailPageComponent} from './components/eopoo-type/eopoo-type-detail-page/eopoo-type-detail-page.component';
import { EopooTypeResolver } from '@agal-generic/resolvers/eopoo-type.resolver';
import {EnzoEopooListPageComponent} from './components/eopoo/eopoo-list-page/eopoo-list-page.component';
import {EnzoEopooDetailPageComponent} from './components/eopoo/eopoo-detail-page/eopoo-detail-page.component';
import { EopooResolver } from '@agal-generic/resolvers/eopoo.resolver';
import {EnzoAddressListPageComponent} from './components/address/address-list-page/address-list-page.component';
import {EnzoAddressDetailPageComponent} from './components/address/address-detail-page/address-detail-page.component';
import { AddressResolver } from '@agal-generic/resolvers/address.resolver';
import {EnzoContactListPageComponent} from './components/contact/contact-list-page/contact-list-page.component';
import {EnzoContactDetailPageComponent} from './components/contact/contact-detail-page/contact-detail-page.component';
import { ContactResolver } from '@agal-generic/resolvers/contact.resolver';
import {EnzoReferentListPageComponent} from './components/referent/referent-list-page/referent-list-page.component';
import {EnzoReferentDetailPageComponent} from './components/referent/referent-detail-page/referent-detail-page.component';
import { ReferentResolver } from '@agal-generic/resolvers/referent.resolver';

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
			path: 'eopoo-type/detail/:id', 
			component: EnzoEopooTypeDetailPageComponent,
			resolve: {
                eopooType: EopooTypeResolver,
            },
		},

            
		{
			path: 'eopoo', 
			component: EnzoEopooListPageComponent,
		},

		{
			path: 'eopoo/detail/:id', 
			component: EnzoEopooDetailPageComponent,
			resolve: {
                eopoo: EopooResolver,
            },
		},

            
		{
			path: 'address', 
			component: EnzoAddressListPageComponent,
		},

		{
			path: 'address/detail/:id', 
			component: EnzoAddressDetailPageComponent,
			resolve: {
                address: AddressResolver,
            },
		},

            
		{
			path: 'contact', 
			component: EnzoContactListPageComponent,
		},

		{
			path: 'contact/detail/:id', 
			component: EnzoContactDetailPageComponent,
			resolve: {
                contact: ContactResolver,
            },
		},

            
		{
			path: 'referent', 
			component: EnzoReferentListPageComponent,
		},

		{
			path: 'referent/detail/:id', 
			component: EnzoReferentDetailPageComponent,
			resolve: {
                referent: ReferentResolver,
            },
		},

            
    
];
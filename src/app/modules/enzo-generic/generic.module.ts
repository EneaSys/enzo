import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EnzoSharedModule } from 'app/shared/shared.module';
import { genericRoutes } from './generic.route';
import { AgalGenericModule } from '@agal-generic/generic.module';

import {EnzoEopooTypeListPageComponent} from './components/eopoo-type/eopoo-type-list-page/eopoo-type-list-page.component';
import {EnzoEopooTypeDetailPageComponent} from './components/eopoo-type/eopoo-type-detail-page/eopoo-type-detail-page.component';

import {EnzoEopooListPageComponent} from './components/eopoo/eopoo-list-page/eopoo-list-page.component';
import {EnzoEopooDetailPageComponent} from './components/eopoo/eopoo-detail-page/eopoo-detail-page.component';

import {EnzoAddressListPageComponent} from './components/address/address-list-page/address-list-page.component';
import {EnzoAddressDetailPageComponent} from './components/address/address-detail-page/address-detail-page.component';

import {EnzoContactListPageComponent} from './components/contact/contact-list-page/contact-list-page.component';
import {EnzoContactDetailPageComponent} from './components/contact/contact-detail-page/contact-detail-page.component';

import {EnzoReferentListPageComponent} from './components/referent/referent-list-page/referent-list-page.component';
import {EnzoReferentDetailPageComponent} from './components/referent/referent-detail-page/referent-detail-page.component';
import { MatDialog } from '@angular/material/dialog';
import { EopooTypeResolver } from '@agal-generic/resolvers/eopoo-type.resolver';
import { EopooResolver } from '@agal-generic/resolvers/eopoo.resolver';
import { AddressResolver } from '@agal-generic/resolvers/address.resolver';
import { ContactResolver } from '@agal-generic/resolvers/contact.resolver';
import { ReferentResolver } from '@agal-generic/resolvers/referent.resolver';


@NgModule({
	imports: [ 
		RouterModule.forChild(genericRoutes),
		EnzoSharedModule,
		AgalGenericModule,

	],
	declarations: [

            EnzoEopooTypeListPageComponent,
            EnzoEopooTypeDetailPageComponent,

            EnzoEopooListPageComponent,
            EnzoEopooDetailPageComponent,

            EnzoAddressListPageComponent,
            EnzoAddressDetailPageComponent,

            EnzoContactListPageComponent,
            EnzoContactDetailPageComponent,

            EnzoReferentListPageComponent,
            EnzoReferentDetailPageComponent,

	],
	providers: [

        EopooTypeResolver,
			
            EopooResolver,
			
            AddressResolver,
			
            ContactResolver,
			
            ReferentResolver,
		
	],
})
export class EnzoGenericModule {}
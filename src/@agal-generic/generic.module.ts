import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgalCoreModule } from '@agal-core/agal-core.module';
import { EopooNamePipe } from './pipe/eopoo-name.pipe';
import { AigGenericClientModule } from 'aig-generic';

import {AgalEopooTypeListLoaderComponent} from './components/eopoo-type/eopoo-type-list-loader/eopoo-type-list-loader.component';
import {AgalEopooTypeDetailBoxComponent} from './components/eopoo-type/eopoo-type-detail-box/eopoo-type-detail-box.component';

import {AgalEopooListLoaderComponent} from './components/eopoo/eopoo-list-loader/eopoo-list-loader.component';
import {AgalEopooDetailBoxComponent} from './components/eopoo/eopoo-detail-box/eopoo-detail-box.component';

import {AgalAddressListLoaderComponent} from './components/address/address-list-loader/address-list-loader.component';
import {AgalAddressDetailBoxComponent} from './components/address/address-detail-box/address-detail-box.component';

import {AgalContactListLoaderComponent} from './components/contact/contact-list-loader/contact-list-loader.component';
import {AgalContactDetailBoxComponent} from './components/contact/contact-detail-box/contact-detail-box.component';

import {AgalReferentListLoaderComponent} from './components/referent/referent-list-loader/referent-list-loader.component';
import {AgalReferentDetailBoxComponent} from './components/referent/referent-detail-box/referent-detail-box.component';


@NgModule({
	imports: [ 
		CommonModule,
		AgalCoreModule,
		AigGenericClientModule,
	],
	declarations: [
		EopooNamePipe,

            AgalEopooTypeListLoaderComponent,
            AgalEopooTypeDetailBoxComponent,

            AgalEopooListLoaderComponent,
            AgalEopooDetailBoxComponent,

            AgalAddressListLoaderComponent,
            AgalAddressDetailBoxComponent,

            AgalContactListLoaderComponent,
            AgalContactDetailBoxComponent,

            AgalReferentListLoaderComponent,
            AgalReferentDetailBoxComponent,

	],
	exports: [
		EopooNamePipe,
			
            AgalEopooTypeListLoaderComponent,
            AgalEopooTypeDetailBoxComponent,
			
            AgalEopooListLoaderComponent,
            AgalEopooDetailBoxComponent,
			
            AgalAddressListLoaderComponent,
            AgalAddressDetailBoxComponent,
			
            AgalContactListLoaderComponent,
            AgalContactDetailBoxComponent,
			
            AgalReferentListLoaderComponent,
            AgalReferentDetailBoxComponent,
			
	],
	providers: [
		
	],
})
export class AgalGenericModule {}
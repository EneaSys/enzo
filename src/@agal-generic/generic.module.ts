import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgalCoreModule } from '@agal-core/agal-core.module';
import { EopooNamePipe } from '@agal-generic/pipe/eopoo-name.pipe';
import { AigGenericClientModule } from 'aig-generic';

import { AgalEopooTypeListLoaderComponent } from './components/eopoo-type/eopoo-type-list-loader/eopoo-type-list-loader.component';
import { AgalEopooTypeDetailBoxComponent } from './components/eopoo-type/eopoo-type-detail-box/eopoo-type-detail-box.component';
import { EopooTypeResolver } from './resolvers/eopoo-type.resolver';
import { AgalEopooListLoaderComponent } from './components/eopoo/eopoo-list-loader/eopoo-list-loader.component';
import { AgalEopooDetailBoxComponent } from './components/eopoo/eopoo-detail-box/eopoo-detail-box.component';
import { EopooResolver } from './resolvers/eopoo.resolver';
import { AgalAddressListLoaderComponent } from './components/address/address-list-loader/address-list-loader.component';
import { AgalAddressDetailBoxComponent } from './components/address/address-detail-box/address-detail-box.component';
import { AddressResolver } from './resolvers/address.resolver';
import { AgalContactListLoaderComponent } from './components/contact/contact-list-loader/contact-list-loader.component';
import { AgalContactDetailBoxComponent } from './components/contact/contact-detail-box/contact-detail-box.component';
import { ContactResolver } from './resolvers/contact.resolver';
import { AgalReferentListLoaderComponent } from './components/referent/referent-list-loader/referent-list-loader.component';
import { AgalReferentDetailBoxComponent } from './components/referent/referent-detail-box/referent-detail-box.component';
import { ReferentResolver } from './resolvers/referent.resolver';
import { AgalEopooDisplayColumnComponent } from './components/eopoo/eopoo-display-column/eopoo-display-column.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [ 
		CommonModule,
		AgalCoreModule,
		AigGenericClientModule,
		FormsModule,
		ReactiveFormsModule,

		
	],
	declarations: [
		EopooNamePipe,

            AgalEopooTypeListLoaderComponent,
            AgalEopooTypeDetailBoxComponent,

            AgalEopooListLoaderComponent,
            AgalEopooDetailBoxComponent,
			AgalEopooDisplayColumnComponent,

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
			AgalEopooDisplayColumnComponent,
			
            AgalAddressListLoaderComponent,
            AgalAddressDetailBoxComponent,
			
            AgalContactListLoaderComponent,
            AgalContactDetailBoxComponent,
			
            AgalReferentListLoaderComponent,
            AgalReferentDetailBoxComponent,
			
	],
	providers: [
		EopooNamePipe,
			
            EopooTypeResolver,
			
            EopooResolver,
			
            AddressResolver,
			
            ContactResolver,
			
            ReferentResolver,
			
		
	],
})
export class AgalGenericModule {}
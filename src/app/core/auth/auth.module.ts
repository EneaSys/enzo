import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PigesAuthModule } from '@piges-auth/piges-auth.module';
import { PIGES_CONFIG } from '@piges-auth/pigest.export';

import { EnzoAuthService } from './auth.service';
import { EnzoAuthGuard } from './auth.guard';

// Piges
const pigesConfig = {
	serverUrl: 'https://auth.piges.io',
	clientId: 'heemai88do8kq0685e02vbnnj',
	clientSecret: '',
	redirectUrl: window.location.origin + '/piges/auth/callback',
	idp_identifier: 'apigest-okta' //'ya75g8a' //'apigest-okta'
}

@NgModule({
	imports: [ 
		CommonModule,
		PigesAuthModule,
	],
	providers: [
		EnzoAuthService,
		EnzoAuthGuard,

		{ provide: PIGES_CONFIG, useValue: pigesConfig },
		
	],
})
export class EnzoAuthModule {}
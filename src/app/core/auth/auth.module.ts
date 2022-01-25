import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PigesAuthModule, PIGES_CONFIG } from '@piges/auth-angular';

import { EnzoAuthService } from './auth.service';
import { EnzoAuthGuard } from './auth.guard';

// Piges
const pigesConfig = {
	serverUrl: 'https://auth.piges.io',
	authorizeUrl: 'https://account.piges.io',
	clientId: 'heemai88do8kq0685e02vbnnj',
	clientSecret: '',
	redirectUrl: window.location.origin + '/piges/auth/callback',
	idp_identifier: ''
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
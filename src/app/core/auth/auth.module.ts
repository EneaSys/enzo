import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PigesAuthModule, PIGES_CONFIG } from '@piges/auth-angular';

import { EnzoAuthService } from './auth.service';
import { EnzoAuthGuard } from './auth.guard';
import { APP_URL } from 'app/app.constants';

// Piges
const pigesConfig = {
	serverUrl: 'https://auth.piges.io',
	authorizeUrl: 'https://account.piges.io',
	clientId: 'heemai88do8kq0685e02vbnnj',
	clientSecret: '',
	redirectUrl: APP_URL + '/piges/auth/callback',
	idp_identifier: '',
	clientUrl: APP_URL
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
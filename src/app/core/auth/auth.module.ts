import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OKTA_CONFIG, OktaAuthModule } from '@okta/okta-angular';
import { EnzoAuthService } from './auth.service';
import { EnzoAuthGuard } from './auth.guard';

const oktaConfig = {
	issuer: 'https://oauth2.innova-s.com/oauth2/ausuw3xfhUTtDnmk4356',
	clientId: '0oauw2o08aTx59dvx356',
	redirectUri: window.location.origin + '/login/callback'
  }

@NgModule({
	imports: [ 
		CommonModule,
		OktaAuthModule,
	],
	providers: [
		{ provide: OKTA_CONFIG, useValue: oktaConfig },

		EnzoAuthService,
		EnzoAuthGuard,
	],
})
export class EnzoAuthModule {}
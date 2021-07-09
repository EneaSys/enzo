import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { EnzoContextService } from './context.service';
import { EnzoContextGuard } from './context.guard';
import { AigManagementApiModule } from 'aig-management';


@NgModule({
	imports: [
		CommonModule,
		NgxWebstorageModule.forRoot(),
		AigManagementApiModule,
	],
	providers: [
		EnzoContextService,
		EnzoContextGuard,
	],
})
export class EnzoContextModule {}
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { IconsModule } from 'app/core/icons/icons.module';
import { TranslocoCoreModule } from 'app/core/transloco/transloco.module';
import { AigBackendInterceptor } from './aig-backend/auth.interceptor';
import { EnzoAuthModule } from './auth/auth.module';
import { EnzoContextModule } from './context/context.module';

@NgModule({
    imports: [
        IconsModule,
        TranslocoCoreModule,
		EnzoAuthModule,
		EnzoContextModule,
    ], 
	providers: [
		{
            provide: HTTP_INTERCEPTORS,
            useClass: AigBackendInterceptor,
            multi: true
        },
	]
})
export class EnzoCoreModule
{
    /**
     * Constructor
     */
    constructor(
        @Optional() @SkipSelf() parentModule?: EnzoCoreModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}

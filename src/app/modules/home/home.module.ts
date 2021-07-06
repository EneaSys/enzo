import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EnzoSharedModule } from 'app/shared/shared.module';
import { LandingHomeComponent } from 'app/modules/home/home.component';
import { landingHomeRoutes } from 'app/modules/home/home.routing';

@NgModule({
    declarations: [
        LandingHomeComponent
    ],
    imports     : [
        RouterModule.forChild(landingHomeRoutes),
        MatButtonModule,
        MatIconModule,
        EnzoSharedModule
    ]
})
export class LandingHomeModule
{
}

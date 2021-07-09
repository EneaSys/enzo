import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EnzoSharedModule } from 'app/shared/shared.module';
import { SelectContextComponent } from './select-context.component';
import { AigManagementApiModule } from 'aig-management';

export const selectContextModuleRoutes: Route[] = [
    {
        path     : '',
        component: SelectContextComponent
    }
];

@NgModule({
    declarations: [
        SelectContextComponent
    ],
    imports     : [
        RouterModule.forChild(selectContextModuleRoutes),
        MatButtonModule,
        MatIconModule,
        EnzoSharedModule,
    ]
})
export class SelectContextModule
{
}

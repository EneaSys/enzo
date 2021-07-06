import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { LanguagesComponent } from 'app/layout/common/languages/languages.component';
import { EnzoSharedModule } from 'app/shared/shared.module';

@NgModule({
    declarations: [
        LanguagesComponent
    ],
    imports     : [
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        EnzoSharedModule
    ],
    exports     : [
        LanguagesComponent
    ]
})
export class LanguagesModule
{
}

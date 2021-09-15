import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';


import { AgalCoreModule } from '@agal-core/agal-core.module';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

import { EnzoGenericComponentService1 } from './generic-component1.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

		MatSidenavModule,
		MatIconModule,
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
		AgalCoreModule,

		ButtonModule,
		SplitButtonModule,

		MatIconModule,
		MatSidenavModule,
    ],
	providers: [
		EnzoGenericComponentService1,
	]
})
export class EnzoSharedModule
{
}

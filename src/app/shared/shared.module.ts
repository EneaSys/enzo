import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnzoGenericComponentService1 } from './generic-component1.service';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';

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

		MatSidenavModule,
		MatIconModule,
    ],
	providers: [
		EnzoGenericComponentService1,
	]
})
export class EnzoSharedModule
{
}

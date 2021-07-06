import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EnzoGenericComponentService1 } from './generic-component1.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
	providers: [
		EnzoGenericComponentService1,
	]
})
export class EnzoSharedModule
{
}

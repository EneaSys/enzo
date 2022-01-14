import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { EnzoContextService } from 'app/core/context/context.service';
import { TabManagerService } from 'app/core/tab-manager/tab-manager.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
	isAuthenticated: boolean = false;


	constructor(
		private enzoContextService: EnzoContextService
	)
    {
    }

	cacca() {
		let currentUrlArray = window.location.pathname.split("?");
		this.enzoContextService.navigate(currentUrlArray[0]);
	}

	public unique_key: number;
	public main_tab_key: number;
	public parentRef: any;

}

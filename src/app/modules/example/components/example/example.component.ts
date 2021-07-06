import { Component, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { TabManagerService } from 'app/core/tab-manager/tab-manager.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent
{
    constructor(
		public tabManagerService: TabManagerService,
	) { }

	public unique_key: number;
	public main_tab_key: number;
	public parentRef: any;

	test() {
		//this.tabManagerService.createTab(SidebarComponent, 0);
	}
}

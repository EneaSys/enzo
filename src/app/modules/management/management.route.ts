import { Route } from '@angular/router';
import { EnzoApplicationModuleListPageComponent } from './components/application-module/application-module-list-page/application-module-list-page.component';

export const managementRoutes: Route[] = [
	{
		path: 'application-module/list', 
		component: EnzoApplicationModuleListPageComponent
	}
];

import { Component, ViewEncapsulation } from '@angular/core';
import { EnzoContextService } from 'app/core/context/context.service';

@Component({
    selector     : 'landing-home',
    templateUrl  : './home.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LandingHomeComponent
{
    /**
     * Constructor
     */
    constructor(
		private enzoContextService: EnzoContextService
	)
    {
    }

	cacca() {
		let currentUrlArray = window.location.pathname.split("?");
		this.enzoContextService.navigate(currentUrlArray[0]);
	}
}

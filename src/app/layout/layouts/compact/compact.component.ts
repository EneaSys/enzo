import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { FuseNavigationService, FuseVerticalNavigationComponent } from '@fuse/components/navigation';
import { Navigation } from 'app/core/navigation/navigation.types';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { TabManagerService } from 'app/core/tab-manager/tab-manager.service';

@Component({
    selector     : 'compact-layout',
    templateUrl  : './compact.component.html',
	styleUrls	 : ['./compact.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CompactLayoutComponent implements OnInit, OnDestroy
{
    isScreenSmall: boolean;
    navigation: Navigation;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    constructor(
        private _navigationService: NavigationService,
        private _fuseMediaWatcherService: FuseMediaWatcherService,
        private _fuseNavigationService: FuseNavigationService,
		public tabManagerService: TabManagerService,
    ) { }

	
    ngOnInit(): void {
        // Subscribe to navigation data
        this._navigationService.navigation$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe((navigation: Navigation) => {
                this.navigation = navigation;
            });

        // Subscribe to media changes
        this._fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {
                // Check if the screen is small
                this.isScreenSmall = !matchingAliases.includes('md');
            });
    }
	
    ngOnDestroy(): void {
		this.tabManagerService.removeAllTabs();
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }


    toggleNavigation(name: string): void
    {
        // Get the navigation
        const navigation = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(name);

        if ( navigation )
        {
            // Toggle the opened status
            navigation.toggle();
        }
    }

	isActiveTab(tab: any) {
		if(this.tabManagerService.getActiveTab() === tab) {
			return true;
		}
		return false;
	}

	isActiveCard(card: any) {
		if(this.tabManagerService.getActiveCard() === card) {
			return true;
		}
		return false;
	}

	showSubTabMenu() {
		if(!this.tabManagerService.getActiveTab()) {
			return false;
		}
		if(this.tabManagerService.getCards() && this.tabManagerService.getCards().length > 0) {
			return true;
		}
		return false
	}
}

import { Injectable, OnDestroy, OnInit } from "@angular/core";
import { NavigationEnd } from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { EnzoGenericComponentService1 } from "./generic-component1.service";

@Injectable()
export class EnzoGenericComponent1 implements OnInit, OnDestroy {
	drawerMode: 'over' | 'side' = 'side';
    drawerOpened: boolean = true;
    protected _unsubscribeAll: Subject<any> = new Subject<any>();

	tmCurrentComponent: any = {};
	
    constructor(
		public _gcs: EnzoGenericComponentService1,
	) {
		this.tmCurrentComponent = this._gcs.tabManagerService.createComponent("PageName");
	}

    ngOnInit(): void
    {
        // Subscribe to media changes
        this._gcs.fuseMediaWatcherService.onMediaChange$
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(({matchingAliases}) => {
                if ( matchingAliases.includes('lg') )
                {
                    this.drawerMode = 'side';
                    this.drawerOpened = true;
                }
                else
                {
                    this.drawerMode = 'over';
                    this.drawerOpened = false;
                }
            });

            this._gcs.router.events
                .pipe(takeUntil(this._unsubscribeAll))
                .subscribe((e: any) => {
                    if (e instanceof NavigationEnd) {
                        this.onLoad();
                    }
                });
    }

	ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    protected onLoad() {}
}
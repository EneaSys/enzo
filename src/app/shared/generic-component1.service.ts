import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FuseMediaWatcherService } from '@fuse/services/media-watcher';
import { TabManagerService } from 'app/core/tab-manager/tab-manager.service';

@Injectable()
export class EnzoGenericComponentService1 {
    constructor(
        public fuseMediaWatcherService: FuseMediaWatcherService,
        public tabManagerService: TabManagerService,
        public router: Router,
    ) { }
}
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';

import { AgalGenericComponent } from '@agal-core/components/main-generic-component';
import { AgalCommonService } from '@agal-core/services/common.service';
import { AgalListDisplayModality } from '@agal-core/enum/list-display-modality';
import { AgalButtonFunctions } from '@agal-core/enum/button-functions';

import {rappresentante-fiscaleResourceService } from 'aig-rappresentante-fiscale';

@Component({
    selector: 'agal-rappresentante-fiscale-list-loader',
    templateUrl: './rappresentante-fiscale-list-loader.component.html',
    styleUrls: ['./rappresentante-fiscale-list-loader.component.scss']
})
export class AgalRappresentanteFiscaleListLoaderComponent extends AgalGenericComponent implements OnInit {
	@Input()
    filters: any = {};
    
    @Input()
    view: AgalListDisplayModality;
    @Input()
    dc: string[];

    @Input()
    buttons: any[];
    @Input()
    customFunction: any[];
    
    constructor(
        private resourceService: RappresentanteFiscaleResourceService,
        agcs: AgalCommonService
    ) { super(agcs); }

    isLoaded: boolean = false;

    loading: boolean = true;
    ds: any[];
    totalRecords: number = 0;

    selectedElements: any[] = [];

    private pageable: any = {};

    private sort: string[] = [];

    ngOnInit(): void {
        
    }

    async changePagination(event: any) {
        this.pageable = event;
        
        await this.loadData();
        this.isLoaded = true;
    }

    ngOnChanges(changes: SimpleChanges) {
        if(!this.isLoaded) {
            return;
        }
        this.loadData();
    }

    lazyLoad(event: LazyLoadEvent) {

		console.log(event);


        if(!this.isLoaded) {
            return;
        }

        this.sort = [];
        if(event.sortField !== undefined) {
            let sortable: string = event.sortField + ',';
            sortable += (event.sortOrder > 0) ? 'asc' : 'desc';
            this.sort.push(sortable);
        }

        if(this.sort.length > 0) {
            this.loadData();
        }
    }


    async loadData() {
        this.loading = true;

        let filters = this.filters;
        filters.page = this.pageable.page;
        filters.size = this.pageable.size;
        filters.sort = this.sort;
        
        this.ds = await this.resourceService.getAllRappresentanteFiscaleUsingGET(filters).toPromise();
        
        this.totalRecords = await this.resourceService.countRappresentanteFiscaleUsingGET(filters).toPromise();

        this.loading = false;
    }
}

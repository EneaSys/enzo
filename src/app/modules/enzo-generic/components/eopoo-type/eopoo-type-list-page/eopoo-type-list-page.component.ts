import { AgalPaginator } from '@agal-core/components/paginator/paginator.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
    templateUrl  : './eopoo-type-list-page.component.html',
})
export class EnzoEopooTypeListPageComponent extends EnzoGenericComponent1 {
    constructor(
		private router: Router,
		public _gcs: EnzoGenericComponentService1,
	) {
		super(_gcs);
		this.tmCurrentComponent.name = "EopooType list";
	}

	eopooTypeListPaginator: AgalPaginator = {
		page: 1,
		size: 10
	};
	eopooTypeCount: number;

	paginatorEvent(paginator: any) {
		let eopooTypeListPaginator = { ...paginator }
		this.eopooTypeListPaginator = eopooTypeListPaginator;
	}

	exportButtons: any[] =  [
		{
			label: 'Pdf',
			icon: 'pi pi-file-pdf', command: () => {
				console.log("pdf");
			},
		},
		{
			label: 'Csv',
			icon: 'pi pi-file-excel', command: () => {
				console.log("csv");
			}
		}
	]

	tableButtons: any[] = [
		{
			label: "Dettagli",
			hideLabel: true,
			icon: "pi pi-search",
			severity: "secondary",
			class: "p-button-sm p-button-outlined",
			command: (e: any) => {
				this._gcs.tabManagerService.openInTab()
				this.router.navigateByUrl("/generic/eopoo-type/detail/"+e.id)
			},
			childs: [
				{
					label: "Edit",
					icon: "pi pi-pencil",
					command: (e: any) => {
						console.log("edit", e.item.data.id);
					}
				},
				{
					label: "Delete",
					icon: "pi pi-trash",
					command: async (e: any) => {
						console.log("delete", e.item.data.id);
					}
				}
			]
		}
	]
}
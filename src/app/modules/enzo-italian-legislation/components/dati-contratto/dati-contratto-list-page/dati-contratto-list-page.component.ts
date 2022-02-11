import { AgalPaginator } from '@agal-core/components/paginator/paginator.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
    templateUrl  : './dati-contratto-list-page.component.html',
})
export class EnzoDatiContrattoListPageComponent extends EnzoGenericComponent1 {
    constructor(
		private router: Router,
		public _gcs: EnzoGenericComponentService1,
	) {
		super(_gcs);
		this.tmCurrentComponent.name = "DatiContratto list";
	}

	datiContrattoListPaginator: AgalPaginator = {
		page: 0,
		size: 30
	};
	datiContrattoCount: number;

	datiContrattoListDc = [ '_ck' , 'id'];
	paginatorEvent(paginator: any) {
		let datiContrattoListPaginator = { ...paginator }
		this.datiContrattoListPaginator = datiContrattoListPaginator;
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
				this.router.navigateByUrl("/italian-legislation/dati-contratto/detail/"+e.id)
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
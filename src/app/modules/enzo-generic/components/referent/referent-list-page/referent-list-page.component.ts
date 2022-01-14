import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
    templateUrl  : './referent-list-page.component.html',
})
export class EnzoReferentListPageComponent extends EnzoGenericComponent1 {
    constructor(
		private router: Router,
		public _gcs: EnzoGenericComponentService1,
	) {
		super(_gcs);
		this.tmCurrentComponent.name = "Referent list";
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
			severity: "primary",
			class: "",
			command: (e: any) => {
				this._gcs.tabManagerService.openInTab()
				this.router.navigateByUrl("/example/asd/"+e.id)
			},
		},
		{
			label: "Edit",
			hideLabel: true,
			icon: "pi pi-pencil",
			severity: "secondary",
			class: "",
			command: (e: any) => {
				console.log("edit");
			}
		},{
			label: "Delete",
			hideLabel: true,
			icon: "pi pi-trash",
			severity: "danger",
			class: "",
			command: async (e: any) => {
				console.log("delete");
			}
		}
	]
}
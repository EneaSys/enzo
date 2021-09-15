import { Component } from '@angular/core';
import { EnzoGenericComponentService1 } from 'app/shared/generic-component1.service';
import { EnzoGenericComponent1 } from 'app/shared/generic1.component';

@Component({
    templateUrl  : './sidebar.component.html',
})
export class SidebarComponent extends EnzoGenericComponent1 {
    constructor(
		public _gcs: EnzoGenericComponentService1,
	) {
		super(_gcs);
		this.tmCurrentComponent.name = 'Sidebar';
	}

	rename() {
		this.tmCurrentComponent.name = 'banana';
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
			label: "Partecipa",
			severity: "secondary",
			class: "",
			command: (e: any) => {
				console.log("partecipa");
			}
		},{
			label: "Dettagli",
			hideLabel: true,
			icon: "pi pi-search",
			severity: "primary",
			class: "",
			command: (e: any) => {
				console.log("details");
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

import { Component } from "@angular/core";
import { MatDialog, MatSnackBar } from "@angular/material";
import { ActivatedRoute, Router } from "@angular/router";
import { FuseProgressBarService } from "@fuse/components/progress-bar/progress-bar.service";
import { PartecipationDTO, PartecipationResourceService, ProcurementDTO, ProcurementLotDTO, ProcurementLotResourceService } from "aig-italianlegislation";
import { AigGenericComponentService } from "app/main/api-gest-console/generic-component/generic-component.service";
import { AigIppGenericComponent } from "../../../ipp/components/ipp-generic-component";
import { AigPartecipationNewUpdateDialogComponent } from "../partecipation-new-update-dialog/partecipation-new-update-dialog.component";
import { AigProcurementLotNewUpdateDialogComponent } from "../procurement-lot-new-update-dialog/procurement-lot-new-update-dialog.component";
import { AigProcurementNewUpdateDialogComponent } from "../procurement-new-update-dialog/procurement-new-update-dialog.component";

@Component({
  selector: 'enzo-context-module-detail-page',
  templateUrl: './context-module-detail-page.component.html',
  styleUrls: ['./context-module-detail-page.component.scss']
})
export class EnzoContextModuleDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private contextModuleResourceService: ContextModuleResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  contextModuleDTO: ContextModuleDTO;

  loadPage() {
    this.contextModuleDTO = this.route.snapshot.data.contextModule;
    this.loadOther();
  }

  async reloadPage() {
    this.contextModuleDTO = await this.contextModuleResourceService.getContextModuleUsingGET(this.contextModuleDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editContextModule(contextModule: ContextModuleDTO) {
    this.dialog.open(EnzoContextModuleNewUpdateDialogComponent, { data: { contextModule: contextModule } });
  }

  async deleteContextModule(contextModuleDTO: ContextModuleDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.contextModuleResourceService.deleteContextModuleUsingDELETE(contextModuleDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${contextModuleDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${contextModuleDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editContextModule(contextModuleDTO: ContextModule) {
    this.dialog.open(AigContextModuleNewUpdateDialogComponent, { data: { contextModule: contextModuleDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      contextModuleIdEquals: this.contextModuleDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(contextModule: ContextModuleDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { contextModule: contextModule } });
  }

}
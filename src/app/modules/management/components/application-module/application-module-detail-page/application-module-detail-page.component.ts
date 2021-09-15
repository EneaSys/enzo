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
  selector: 'enzo-application-module-detail-page',
  templateUrl: './application-module-detail-page.component.html',
  styleUrls: ['./application-module-detail-page.component.scss']
})
export class EnzoApplicationModuleDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private applicationModuleResourceService: ApplicationModuleResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  applicationModuleDTO: ApplicationModuleDTO;

  loadPage() {
    this.applicationModuleDTO = this.route.snapshot.data.applicationModule;
    this.loadOther();
  }

  async reloadPage() {
    this.applicationModuleDTO = await this.applicationModuleResourceService.getApplicationModuleUsingGET(this.applicationModuleDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editApplicationModule(applicationModule: ApplicationModuleDTO) {
    this.dialog.open(EnzoApplicationModuleNewUpdateDialogComponent, { data: { applicationModule: applicationModule } });
  }

  async deleteApplicationModule(applicationModuleDTO: ApplicationModuleDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.applicationModuleResourceService.deleteApplicationModuleUsingDELETE(applicationModuleDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${applicationModuleDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${applicationModuleDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editApplicationModule(applicationModuleDTO: ApplicationModule) {
    this.dialog.open(AigApplicationModuleNewUpdateDialogComponent, { data: { applicationModule: applicationModuleDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      applicationModuleIdEquals: this.applicationModuleDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(applicationModule: ApplicationModuleDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { applicationModule: applicationModule } });
  }

}
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
  selector: 'enzo-user-licenze-detail-page',
  templateUrl: './user-licenze-detail-page.component.html',
  styleUrls: ['./user-licenze-detail-page.component.scss']
})
export class EnzoUserLicenzeDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private userLicenzeResourceService: UserLicenzeResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  userLicenzeDTO: UserLicenzeDTO;

  loadPage() {
    this.userLicenzeDTO = this.route.snapshot.data.userLicenze;
    this.loadOther();
  }

  async reloadPage() {
    this.userLicenzeDTO = await this.userLicenzeResourceService.getUserLicenzeUsingGET(this.userLicenzeDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editUserLicenze(userLicenze: UserLicenzeDTO) {
    this.dialog.open(EnzoUserLicenzeNewUpdateDialogComponent, { data: { userLicenze: userLicenze } });
  }

  async deleteUserLicenze(userLicenzeDTO: UserLicenzeDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.userLicenzeResourceService.deleteUserLicenzeUsingDELETE(userLicenzeDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${userLicenzeDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${userLicenzeDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editUserLicenze(userLicenzeDTO: UserLicenze) {
    this.dialog.open(AigUserLicenzeNewUpdateDialogComponent, { data: { userLicenze: userLicenzeDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      userLicenzeIdEquals: this.userLicenzeDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(userLicenze: UserLicenzeDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { userLicenze: userLicenze } });
  }

}
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
  selector: 'enzo-user-license-detail-page',
  templateUrl: './user-license-detail-page.component.html',
  styleUrls: ['./user-license-detail-page.component.scss']
})
export class EnzoUserLicenseDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private userLicenseResourceService: UserLicenseResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  userLicenseDTO: UserLicenseDTO;

  loadPage() {
    this.userLicenseDTO = this.route.snapshot.data.userLicense;
    this.loadOther();
  }

  async reloadPage() {
    this.userLicenseDTO = await this.userLicenseResourceService.getUserLicenseUsingGET(this.userLicenseDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editUserLicense(userLicense: UserLicenseDTO) {
    this.dialog.open(EnzoUserLicenseNewUpdateDialogComponent, { data: { userLicense: userLicense } });
  }

  async deleteUserLicense(userLicenseDTO: UserLicenseDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.userLicenseResourceService.deleteUserLicenseUsingDELETE(userLicenseDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${userLicenseDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${userLicenseDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editUserLicense(userLicenseDTO: UserLicense) {
    this.dialog.open(AigUserLicenseNewUpdateDialogComponent, { data: { userLicense: userLicenseDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      userLicenseIdEquals: this.userLicenseDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(userLicense: UserLicenseDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { userLicense: userLicense } });
  }

}
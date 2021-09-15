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
  selector: 'enzo-license-detail-page',
  templateUrl: './license-detail-page.component.html',
  styleUrls: ['./license-detail-page.component.scss']
})
export class EnzoLicenseDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private licenseResourceService: LicenseResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  licenseDTO: LicenseDTO;

  loadPage() {
    this.licenseDTO = this.route.snapshot.data.license;
    this.loadOther();
  }

  async reloadPage() {
    this.licenseDTO = await this.licenseResourceService.getLicenseUsingGET(this.licenseDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editLicense(license: LicenseDTO) {
    this.dialog.open(EnzoLicenseNewUpdateDialogComponent, { data: { license: license } });
  }

  async deleteLicense(licenseDTO: LicenseDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.licenseResourceService.deleteLicenseUsingDELETE(licenseDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${licenseDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${licenseDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editLicense(licenseDTO: License) {
    this.dialog.open(AigLicenseNewUpdateDialogComponent, { data: { license: licenseDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      licenseIdEquals: this.licenseDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(license: LicenseDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { license: license } });
  }

}
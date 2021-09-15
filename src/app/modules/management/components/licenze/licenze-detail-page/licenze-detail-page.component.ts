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
  selector: 'enzo-licenze-detail-page',
  templateUrl: './licenze-detail-page.component.html',
  styleUrls: ['./licenze-detail-page.component.scss']
})
export class EnzoLicenzeDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private licenzeResourceService: LicenzeResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  licenzeDTO: LicenzeDTO;

  loadPage() {
    this.licenzeDTO = this.route.snapshot.data.licenze;
    this.loadOther();
  }

  async reloadPage() {
    this.licenzeDTO = await this.licenzeResourceService.getLicenzeUsingGET(this.licenzeDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editLicenze(licenze: LicenzeDTO) {
    this.dialog.open(EnzoLicenzeNewUpdateDialogComponent, { data: { licenze: licenze } });
  }

  async deleteLicenze(licenzeDTO: LicenzeDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.licenzeResourceService.deleteLicenzeUsingDELETE(licenzeDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${licenzeDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${licenzeDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editLicenze(licenzeDTO: Licenze) {
    this.dialog.open(AigLicenzeNewUpdateDialogComponent, { data: { licenze: licenzeDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      licenzeIdEquals: this.licenzeDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(licenze: LicenzeDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { licenze: licenze } });
  }

}
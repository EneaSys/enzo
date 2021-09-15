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
  selector: 'enzo-personalization-detail-page',
  templateUrl: './personalization-detail-page.component.html',
  styleUrls: ['./personalization-detail-page.component.scss']
})
export class EnzoPersonalizationDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private personalizationResourceService: PersonalizationResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  personalizationDTO: PersonalizationDTO;

  loadPage() {
    this.personalizationDTO = this.route.snapshot.data.personalization;
    this.loadOther();
  }

  async reloadPage() {
    this.personalizationDTO = await this.personalizationResourceService.getPersonalizationUsingGET(this.personalizationDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editPersonalization(personalization: PersonalizationDTO) {
    this.dialog.open(EnzoPersonalizationNewUpdateDialogComponent, { data: { personalization: personalization } });
  }

  async deletePersonalization(personalizationDTO: PersonalizationDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.personalizationResourceService.deletePersonalizationUsingDELETE(personalizationDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${personalizationDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${personalizationDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editPersonalization(personalizationDTO: Personalization) {
    this.dialog.open(AigPersonalizationNewUpdateDialogComponent, { data: { personalization: personalizationDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      personalizationIdEquals: this.personalizationDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(personalization: PersonalizationDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { personalization: personalization } });
  }

}
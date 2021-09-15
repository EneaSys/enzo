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
  selector: 'enzo-field-reference-detail-page',
  templateUrl: './field-reference-detail-page.component.html',
  styleUrls: ['./field-reference-detail-page.component.scss']
})
export class EnzoFieldReferenceDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private fieldReferenceResourceService: FieldReferenceResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  fieldReferenceDTO: FieldReferenceDTO;

  loadPage() {
    this.fieldReferenceDTO = this.route.snapshot.data.fieldReference;
    this.loadOther();
  }

  async reloadPage() {
    this.fieldReferenceDTO = await this.fieldReferenceResourceService.getFieldReferenceUsingGET(this.fieldReferenceDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editFieldReference(fieldReference: FieldReferenceDTO) {
    this.dialog.open(EnzoFieldReferenceNewUpdateDialogComponent, { data: { fieldReference: fieldReference } });
  }

  async deleteFieldReference(fieldReferenceDTO: FieldReferenceDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.fieldReferenceResourceService.deleteFieldReferenceUsingDELETE(fieldReferenceDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${fieldReferenceDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${fieldReferenceDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editFieldReference(fieldReferenceDTO: FieldReference) {
    this.dialog.open(AigFieldReferenceNewUpdateDialogComponent, { data: { fieldReference: fieldReferenceDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      fieldReferenceIdEquals: this.fieldReferenceDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(fieldReference: FieldReferenceDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { fieldReference: fieldReference } });
  }

}
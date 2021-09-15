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
  selector: 'enzo-object-reference-detail-page',
  templateUrl: './object-reference-detail-page.component.html',
  styleUrls: ['./object-reference-detail-page.component.scss']
})
export class EnzoObjectReferenceDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private objectReferenceResourceService: ObjectReferenceResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  objectReferenceDTO: ObjectReferenceDTO;

  loadPage() {
    this.objectReferenceDTO = this.route.snapshot.data.objectReference;
    this.loadOther();
  }

  async reloadPage() {
    this.objectReferenceDTO = await this.objectReferenceResourceService.getObjectReferenceUsingGET(this.objectReferenceDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editObjectReference(objectReference: ObjectReferenceDTO) {
    this.dialog.open(EnzoObjectReferenceNewUpdateDialogComponent, { data: { objectReference: objectReference } });
  }

  async deleteObjectReference(objectReferenceDTO: ObjectReferenceDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.objectReferenceResourceService.deleteObjectReferenceUsingDELETE(objectReferenceDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${objectReferenceDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${objectReferenceDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editObjectReference(objectReferenceDTO: ObjectReference) {
    this.dialog.open(AigObjectReferenceNewUpdateDialogComponent, { data: { objectReference: objectReferenceDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      objectReferenceIdEquals: this.objectReferenceDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(objectReference: ObjectReferenceDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { objectReference: objectReference } });
  }

}
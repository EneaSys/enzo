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
  selector: 'enzo-entity-reference-detail-page',
  templateUrl: './entity-reference-detail-page.component.html',
  styleUrls: ['./entity-reference-detail-page.component.scss']
})
export class EnzoEntityReferenceDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private entityReferenceResourceService: EntityReferenceResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  entityReferenceDTO: EntityReferenceDTO;

  loadPage() {
    this.entityReferenceDTO = this.route.snapshot.data.entityReference;
    this.loadOther();
  }

  async reloadPage() {
    this.entityReferenceDTO = await this.entityReferenceResourceService.getEntityReferenceUsingGET(this.entityReferenceDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editEntityReference(entityReference: EntityReferenceDTO) {
    this.dialog.open(EnzoEntityReferenceNewUpdateDialogComponent, { data: { entityReference: entityReference } });
  }

  async deleteEntityReference(entityReferenceDTO: EntityReferenceDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.entityReferenceResourceService.deleteEntityReferenceUsingDELETE(entityReferenceDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${entityReferenceDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${entityReferenceDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editEntityReference(entityReferenceDTO: EntityReference) {
    this.dialog.open(AigEntityReferenceNewUpdateDialogComponent, { data: { entityReference: entityReferenceDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      entityReferenceIdEquals: this.entityReferenceDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(entityReference: EntityReferenceDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { entityReference: entityReference } });
  }

}
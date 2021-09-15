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
  selector: 'enzo-type-category-reference-detail-page',
  templateUrl: './type-category-reference-detail-page.component.html',
  styleUrls: ['./type-category-reference-detail-page.component.scss']
})
export class EnzoTypeCategoryReferenceDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private typeCategoryReferenceResourceService: TypeCategoryReferenceResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  typeCategoryReferenceDTO: TypeCategoryReferenceDTO;

  loadPage() {
    this.typeCategoryReferenceDTO = this.route.snapshot.data.typeCategoryReference;
    this.loadOther();
  }

  async reloadPage() {
    this.typeCategoryReferenceDTO = await this.typeCategoryReferenceResourceService.getTypeCategoryReferenceUsingGET(this.typeCategoryReferenceDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editTypeCategoryReference(typeCategoryReference: TypeCategoryReferenceDTO) {
    this.dialog.open(EnzoTypeCategoryReferenceNewUpdateDialogComponent, { data: { typeCategoryReference: typeCategoryReference } });
  }

  async deleteTypeCategoryReference(typeCategoryReferenceDTO: TypeCategoryReferenceDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.typeCategoryReferenceResourceService.deleteTypeCategoryReferenceUsingDELETE(typeCategoryReferenceDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${typeCategoryReferenceDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${typeCategoryReferenceDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editTypeCategoryReference(typeCategoryReferenceDTO: TypeCategoryReference) {
    this.dialog.open(AigTypeCategoryReferenceNewUpdateDialogComponent, { data: { typeCategoryReference: typeCategoryReferenceDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      typeCategoryReferenceIdEquals: this.typeCategoryReferenceDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(typeCategoryReference: TypeCategoryReferenceDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { typeCategoryReference: typeCategoryReference } });
  }

}
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
  selector: 'enzo-permission-detail-page',
  templateUrl: './permission-detail-page.component.html',
  styleUrls: ['./permission-detail-page.component.scss']
})
export class EnzoPermissionDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private permissionResourceService: PermissionResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  permissionDTO: PermissionDTO;

  loadPage() {
    this.permissionDTO = this.route.snapshot.data.permission;
    this.loadOther();
  }

  async reloadPage() {
    this.permissionDTO = await this.permissionResourceService.getPermissionUsingGET(this.permissionDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editPermission(permission: PermissionDTO) {
    this.dialog.open(EnzoPermissionNewUpdateDialogComponent, { data: { permission: permission } });
  }

  async deletePermission(permissionDTO: PermissionDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.permissionResourceService.deletePermissionUsingDELETE(permissionDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${permissionDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${permissionDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editPermission(permissionDTO: Permission) {
    this.dialog.open(AigPermissionNewUpdateDialogComponent, { data: { permission: permissionDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      permissionIdEquals: this.permissionDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(permission: PermissionDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { permission: permission } });
  }

}
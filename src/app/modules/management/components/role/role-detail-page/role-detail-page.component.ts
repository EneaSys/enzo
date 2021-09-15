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
  selector: 'enzo-role-detail-page',
  templateUrl: './role-detail-page.component.html',
  styleUrls: ['./role-detail-page.component.scss']
})
export class EnzoRoleDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private roleResourceService: RoleResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  roleDTO: RoleDTO;

  loadPage() {
    this.roleDTO = this.route.snapshot.data.role;
    this.loadOther();
  }

  async reloadPage() {
    this.roleDTO = await this.roleResourceService.getRoleUsingGET(this.roleDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editRole(role: RoleDTO) {
    this.dialog.open(EnzoRoleNewUpdateDialogComponent, { data: { role: role } });
  }

  async deleteRole(roleDTO: RoleDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.roleResourceService.deleteRoleUsingDELETE(roleDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${roleDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${roleDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editRole(roleDTO: Role) {
    this.dialog.open(AigRoleNewUpdateDialogComponent, { data: { role: roleDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      roleIdEquals: this.roleDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(role: RoleDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { role: role } });
  }

}
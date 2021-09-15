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
  selector: 'enzo-tenant-context-detail-page',
  templateUrl: './tenant-context-detail-page.component.html',
  styleUrls: ['./tenant-context-detail-page.component.scss']
})
export class EnzoTenantContextDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private tenantContextResourceService: TenantContextResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  tenantContextDTO: TenantContextDTO;

  loadPage() {
    this.tenantContextDTO = this.route.snapshot.data.tenantContext;
    this.loadOther();
  }

  async reloadPage() {
    this.tenantContextDTO = await this.tenantContextResourceService.getTenantContextUsingGET(this.tenantContextDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editTenantContext(tenantContext: TenantContextDTO) {
    this.dialog.open(EnzoTenantContextNewUpdateDialogComponent, { data: { tenantContext: tenantContext } });
  }

  async deleteTenantContext(tenantContextDTO: TenantContextDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.tenantContextResourceService.deleteTenantContextUsingDELETE(tenantContextDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${tenantContextDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${tenantContextDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editTenantContext(tenantContextDTO: TenantContext) {
    this.dialog.open(AigTenantContextNewUpdateDialogComponent, { data: { tenantContext: tenantContextDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      tenantContextIdEquals: this.tenantContextDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(tenantContext: TenantContextDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { tenantContext: tenantContext } });
  }

}
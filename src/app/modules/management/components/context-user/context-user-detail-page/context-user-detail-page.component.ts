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
  selector: 'enzo-context-user-detail-page',
  templateUrl: './context-user-detail-page.component.html',
  styleUrls: ['./context-user-detail-page.component.scss']
})
export class EnzoContextUserDetailPageComponent extends AigIppGenericComponent {
  constructor(
    private contextUserResourceService: ContextUserResourceService,
    private partecipationResourceService: PartecipationResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    private _fuseProgressBarService: FuseProgressBarService,
    private router: Router,
    private _snackBar: MatSnackBar,
    aigGenericComponentService: AigGenericComponentService,
  ) { super(aigGenericComponentService) }

  contextUserDTO: ContextUserDTO;

  loadPage() {
    this.contextUserDTO = this.route.snapshot.data.contextUser;
    this.loadOther();
  }

  async reloadPage() {
    this.contextUserDTO = await this.contextUserResourceService.getContextUserUsingGET(this.contextUserDTO.id).toPromise();
    this.loadOther();
  }

  async loadOther() {
    this.loadPartecipation();
  }

  editContextUser(contextUser: ContextUserDTO) {
    this.dialog.open(EnzoContextUserNewUpdateDialogComponent, { data: { contextUser: contextUser } });
  }

  async deleteContextUser(contextUserDTO: ContextUserDTO) {
    this._fuseProgressBarService.show();

    try {
      await this.contextUserResourceService.deleteContextUserUsingDELETE(contextUserDTO.id).toPromise();

      this._snackBar.open(`Procurement lot: '${contextUserDTO.id}' deleted.`, null, { duration: 2000, });

      this.router.navigate(['/ipp', 'procurement-lot']);
    } catch (e) {
      this._snackBar.open(`Error during deleting procurement lot: '${contextUserDTO.id}'. (${e.message})`, null, { duration: 5000, });
    }
    this._fuseProgressBarService.hide();
  }



  editContextUser(contextUserDTO: ContextUser) {
    this.dialog.open(AigContextUserNewUpdateDialogComponent, { data: { contextUser: contextUserDTO } });
  }




  partecipationDC: string[] = ["id", "proposer", "type", "status", "buttons"];
  partecipationDTOs: PartecipationDTO[];
  partecipationError: any;
  
  async loadPartecipation() {
    let filters = {
      contextUserIdEquals: this.contextUserDTO.id
    };
    this.partecipationDTOs = await this.partecipationResourceService.getAllPartecipationsUsingGET(filters).toPromise(); 
  }

  newPartecipation(contextUser: ContextUserDTO): void {
    this.dialog.open(AigPartecipationNewUpdateDialogComponent, { data: { contextUser: contextUser } });
  }

}
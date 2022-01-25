import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from "@angular/router";
import { ReferentDTO, ReferentResourceService} from 'aig-generic';
import { AgalCommonService } from "@agal-core/services/common.service";
import { AgalGenericComponent } from "@agal-core/components/agal-generic-component";

@Component({
  selector: 'enzo-referent-detail-page',
  templateUrl: './referent-detail-page.component.html',
  styleUrls: ['./referent-detail-page.component.scss']
})
export class EnzoReferentDetailPageComponent extends AgalGenericComponent {
  constructor(
    private resourceService: ReferentResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    agcs: AgalCommonService,
  ) { super(agcs) }

  referentDTO: ReferentDTO;

  loadPage() {
    this.referentDTO = this.route.snapshot.data.referent;
  }

  async reloadPage() {
    this.referentDTO = await this.resourceService.getReferentUsingGET(this.referentDTO.id).toPromise();
  }

  editReferent(referent: ReferentDTO) {
    //this.dialog.open(EnzoReferentNewUpdateDialogComponent, { data: { referent: referent } });
  }

  async deleteReferent(referentDTO: ReferentDTO) {
    
  }
}
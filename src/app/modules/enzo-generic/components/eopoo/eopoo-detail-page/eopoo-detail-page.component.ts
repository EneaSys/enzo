import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from "@angular/router";
import { EopooDTO, EopooResourceService} from 'aig-generic';
import { AgalCommonService } from "@agal-core/services/common.service";
import { AgalGenericComponent } from "@agal-core/components/agal-generic-component";

@Component({
  selector: 'enzo-eopoo-detail-page',
  templateUrl: './eopoo-detail-page.component.html',
  styleUrls: ['./eopoo-detail-page.component.scss']
})
export class EnzoEopooDetailPageComponent extends AgalGenericComponent {
  constructor(
    private resourceService: EopooResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    agcs: AgalCommonService,
  ) { super(agcs) }

  eopooDTO: EopooDTO;

  loadPage() {
    this.eopooDTO = this.route.snapshot.data.eopoo;
  }

  async reloadPage() {
    this.eopooDTO = await this.resourceService.getEopooUsingGET(this.eopooDTO.id).toPromise();
  }

  editEopoo(eopoo: EopooDTO) {
    //this.dialog.open(EnzoEopooNewUpdateDialogComponent, { data: { eopoo: eopoo } });
  }

  async deleteEopoo(eopooDTO: EopooDTO) {
    
  }
}
import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from "@angular/router";
import { EopooTypeDTO, EopooTypeResourceService} from 'aig-generic';
import { AgalCommonService } from "@agal-core/services/common.service";
import { AgalGenericComponent } from "@agal-core/components/agal-generic-component";

@Component({
  selector: 'enzo-eopoo-type-detail-page',
  templateUrl: './eopoo-type-detail-page.component.html',
  styleUrls: ['./eopoo-type-detail-page.component.scss']
})
export class EnzoEopooTypeDetailPageComponent extends AgalGenericComponent {
  constructor(
    private resourceService: EopooTypeResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    agcs: AgalCommonService,
  ) { super(agcs) }

  eopooTypeDTO: EopooTypeDTO;

  loadPage() {
    this.eopooTypeDTO = this.route.snapshot.data.eopooType;
  }

  async reloadPage() {
    this.eopooTypeDTO = await this.resourceService.getEopooTypeUsingGET(this.eopooTypeDTO.id).toPromise();
  }

  editEopooType(eopooType: EopooTypeDTO) {
    //this.dialog.open(EnzoEopooTypeNewUpdateDialogComponent, { data: { eopooType: eopooType } });
  }

  async deleteEopooType(eopooTypeDTO: EopooTypeDTO) {
    
  }
}
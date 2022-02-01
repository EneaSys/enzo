import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EopooTypeDTO, EopooTypeResourceService} from 'aig-generic';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-eopoo-type-detail-page',
  templateUrl: './eopoo-type-detail-page.component.html',
  styleUrls: ['./eopoo-type-detail-page.component.scss']
})
export class EnzoEopooTypeDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: EopooTypeResourceService,
    private route: ActivatedRoute,
    public _gcs: EnzoGenericComponentService1,
    agcs: AgalCommonService,
  ) {
      super(_gcs);
      this.id = +this.route.snapshot.paramMap.get('id');
		  this.tmCurrentComponent.name = 'Detail ' + this.id;
      this.onLoad();
    }

  id: number;

  eopooTypeDTO: EopooTypeDTO;

  onLoad() {
    this.eopooTypeDTO = this.route.snapshot.data.eopooType;
  } 

  async reloadPage() {
    this.eopooTypeDTO = await this.resourceService.getEopooTypeUsingGET(this.eopooTypeDTO.id).toPromise();
  }

  /*editEopooType(eopooType: EopooTypeDTO) {
    //this.dialog.open(EnzoEopooTypeNewUpdateDialogComponent, { data: { eopooType: eopooType } });
  }

  async deleteEopooType(eopooTypeDTO: EopooTypeDTO) {
    
  }*/
}




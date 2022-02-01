import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EopooDTO, EopooResourceService} from 'aig-generic';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-eopoo-detail-page',
  templateUrl: './eopoo-detail-page.component.html',
  styleUrls: ['./eopoo-detail-page.component.scss']
})
export class EnzoEopooDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: EopooResourceService,
    private route: ActivatedRoute,
    public _gcs: EnzoGenericComponentService1,
    agcs: AgalCommonService,
  ) { 
    super(_gcs);
    this.id = +route.snapshot.paramMap.get('id');
    this.tmCurrentComponent.name = 'Detail ' + this.id;
  }

  id: number;

  eopooDTO: EopooDTO;

  


  editEopoo(eopoo: EopooDTO) {
    //this.dialog.open(EnzoEopooNewUpdateDialogComponent, { data: { eopoo: eopoo } });
  }

  async deleteEopoo(eopooDTO: EopooDTO) {
    
  }
}
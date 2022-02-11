import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProcurementDTO, ProcurementResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-procurement-detail-page',
  templateUrl: './procurement-detail-page.component.html',
  styleUrls: ['./procurement-detail-page.component.scss']
})
export class EnzoProcurementDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: ProcurementResourceService,
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

  procurementDTO: ProcurementDTO;

  onLoad() {
    this.procurementDTO = this.route.snapshot.data.procurement;
  } 

  async reloadPage() {
    this.procurementDTO = await this.resourceService.getProcurementUsingGET(this.procurementDTO.id).toPromise();
  }

  /*editProcurement(procurement: ProcurementDTO) {
    //this.dialog.open(EnzoProcurementNewUpdateDialogComponent, { data: { procurement: procurement } });
  }

  async deleteProcurement(procurementDTO: ProcurementDTO) {
    
  }*/
}




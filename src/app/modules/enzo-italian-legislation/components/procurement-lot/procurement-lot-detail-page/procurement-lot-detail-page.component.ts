import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProcurementLotDTO, ProcurementLotResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-procurement-lot-detail-page',
  templateUrl: './procurement-lot-detail-page.component.html',
  styleUrls: ['./procurement-lot-detail-page.component.scss']
})
export class EnzoProcurementLotDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: ProcurementLotResourceService,
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

  procurementLotDTO: ProcurementLotDTO;

  onLoad() {
    this.procurementLotDTO = this.route.snapshot.data.procurementLot;
  } 

  async reloadPage() {
    this.procurementLotDTO = await this.resourceService.getProcurementLotUsingGET(this.procurementLotDTO.id).toPromise();
  }

  /*editProcurementLot(procurementLot: ProcurementLotDTO) {
    //this.dialog.open(EnzoProcurementLotNewUpdateDialogComponent, { data: { procurementLot: procurementLot } });
  }

  async deleteProcurementLot(procurementLotDTO: ProcurementLotDTO) {
    
  }*/
}




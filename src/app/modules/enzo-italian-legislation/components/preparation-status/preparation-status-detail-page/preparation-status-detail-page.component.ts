import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PreparationStatusDTO, PreparationStatusResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-preparation-status-detail-page',
  templateUrl: './preparation-status-detail-page.component.html',
  styleUrls: ['./preparation-status-detail-page.component.scss']
})
export class EnzoPreparationStatusDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: PreparationStatusResourceService,
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

  preparationStatusDTO: PreparationStatusDTO;

  onLoad() {
    this.preparationStatusDTO = this.route.snapshot.data.preparationStatus;
  } 

  async reloadPage() {
    this.preparationStatusDTO = await this.resourceService.getPreparationStatusUsingGET(this.preparationStatusDTO.id).toPromise();
  }

  /*editPreparationStatus(preparationStatus: PreparationStatusDTO) {
    //this.dialog.open(EnzoPreparationStatusNewUpdateDialogComponent, { data: { preparationStatus: preparationStatus } });
  }

  async deletePreparationStatus(preparationStatusDTO: PreparationStatusDTO) {
    
  }*/
}




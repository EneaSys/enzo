import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PreparationDTO, PreparationResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-preparation-detail-page',
  templateUrl: './preparation-detail-page.component.html',
  styleUrls: ['./preparation-detail-page.component.scss']
})
export class EnzoPreparationDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: PreparationResourceService,
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

  preparationDTO: PreparationDTO;

  onLoad() {
    this.preparationDTO = this.route.snapshot.data.preparation;
  } 

  async reloadPage() {
    this.preparationDTO = await this.resourceService.getPreparationUsingGET(this.preparationDTO.id).toPromise();
  }

  /*editPreparation(preparation: PreparationDTO) {
    //this.dialog.open(EnzoPreparationNewUpdateDialogComponent, { data: { preparation: preparation } });
  }

  async deletePreparation(preparationDTO: PreparationDTO) {
    
  }*/
}




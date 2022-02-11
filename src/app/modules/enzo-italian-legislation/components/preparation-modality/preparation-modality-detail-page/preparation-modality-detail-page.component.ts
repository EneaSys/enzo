import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PreparationModalityDTO, PreparationModalityResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-preparation-modality-detail-page',
  templateUrl: './preparation-modality-detail-page.component.html',
  styleUrls: ['./preparation-modality-detail-page.component.scss']
})
export class EnzoPreparationModalityDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: PreparationModalityResourceService,
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

  preparationModalityDTO: PreparationModalityDTO;

  onLoad() {
    this.preparationModalityDTO = this.route.snapshot.data.preparationModality;
  } 

  async reloadPage() {
    this.preparationModalityDTO = await this.resourceService.getPreparationModalityUsingGET(this.preparationModalityDTO.id).toPromise();
  }

  /*editPreparationModality(preparationModality: PreparationModalityDTO) {
    //this.dialog.open(EnzoPreparationModalityNewUpdateDialogComponent, { data: { preparationModality: preparationModality } });
  }

  async deletePreparationModality(preparationModalityDTO: PreparationModalityDTO) {
    
  }*/
}




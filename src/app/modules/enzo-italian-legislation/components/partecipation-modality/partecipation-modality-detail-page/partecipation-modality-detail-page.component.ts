import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PartecipationModalityDTO, PartecipationModalityResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-partecipation-modality-detail-page',
  templateUrl: './partecipation-modality-detail-page.component.html',
  styleUrls: ['./partecipation-modality-detail-page.component.scss']
})
export class EnzoPartecipationModalityDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: PartecipationModalityResourceService,
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

  partecipationModalityDTO: PartecipationModalityDTO;

  onLoad() {
    this.partecipationModalityDTO = this.route.snapshot.data.partecipationModality;
  } 

  async reloadPage() {
    this.partecipationModalityDTO = await this.resourceService.getPartecipationModalityUsingGET(this.partecipationModalityDTO.id).toPromise();
  }

  /*editPartecipationModality(partecipationModality: PartecipationModalityDTO) {
    //this.dialog.open(EnzoPartecipationModalityNewUpdateDialogComponent, { data: { partecipationModality: partecipationModality } });
  }

  async deletePartecipationModality(partecipationModalityDTO: PartecipationModalityDTO) {
    
  }*/
}




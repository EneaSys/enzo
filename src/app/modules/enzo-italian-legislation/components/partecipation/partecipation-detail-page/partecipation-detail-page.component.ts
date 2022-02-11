import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PartecipationDTO, PartecipationResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-partecipation-detail-page',
  templateUrl: './partecipation-detail-page.component.html',
  styleUrls: ['./partecipation-detail-page.component.scss']
})
export class EnzoPartecipationDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: PartecipationResourceService,
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

  partecipationDTO: PartecipationDTO;

  onLoad() {
    this.partecipationDTO = this.route.snapshot.data.partecipation;
  } 

  async reloadPage() {
    this.partecipationDTO = await this.resourceService.getPartecipationUsingGET(this.partecipationDTO.id).toPromise();
  }

  /*editPartecipation(partecipation: PartecipationDTO) {
    //this.dialog.open(EnzoPartecipationNewUpdateDialogComponent, { data: { partecipation: partecipation } });
  }

  async deletePartecipation(partecipationDTO: PartecipationDTO) {
    
  }*/
}




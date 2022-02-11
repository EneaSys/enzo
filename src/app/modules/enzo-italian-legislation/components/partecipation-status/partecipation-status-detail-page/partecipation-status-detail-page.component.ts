import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { PartecipationStatusDTO, PartecipationStatusResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-partecipation-status-detail-page',
  templateUrl: './partecipation-status-detail-page.component.html',
  styleUrls: ['./partecipation-status-detail-page.component.scss']
})
export class EnzoPartecipationStatusDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: PartecipationStatusResourceService,
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

  partecipationStatusDTO: PartecipationStatusDTO;

  onLoad() {
    this.partecipationStatusDTO = this.route.snapshot.data.partecipationStatus;
  } 

  async reloadPage() {
    this.partecipationStatusDTO = await this.resourceService.getPartecipationStatusUsingGET(this.partecipationStatusDTO.id).toPromise();
  }

  /*editPartecipationStatus(partecipationStatus: PartecipationStatusDTO) {
    //this.dialog.open(EnzoPartecipationStatusNewUpdateDialogComponent, { data: { partecipationStatus: partecipationStatus } });
  }

  async deletePartecipationStatus(partecipationStatusDTO: PartecipationStatusDTO) {
    
  }*/
}




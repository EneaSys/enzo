import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ScontoMaggiorazioneDTO, ScontoMaggiorazioneResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-sconto-maggiorazione-detail-page',
  templateUrl: './sconto-maggiorazione-detail-page.component.html',
  styleUrls: ['./sconto-maggiorazione-detail-page.component.scss']
})
export class EnzoScontoMaggiorazioneDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: ScontoMaggiorazioneResourceService,
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

  scontoMaggiorazioneDTO: ScontoMaggiorazioneDTO;

  onLoad() {
    this.scontoMaggiorazioneDTO = this.route.snapshot.data.scontoMaggiorazione;
  } 

  async reloadPage() {
    this.scontoMaggiorazioneDTO = await this.resourceService.getScontoMaggiorazioneUsingGET(this.scontoMaggiorazioneDTO.id).toPromise();
  }

  /*editScontoMaggiorazione(scontoMaggiorazione: ScontoMaggiorazioneDTO) {
    //this.dialog.open(EnzoScontoMaggiorazioneNewUpdateDialogComponent, { data: { scontoMaggiorazione: scontoMaggiorazione } });
  }

  async deleteScontoMaggiorazione(scontoMaggiorazioneDTO: ScontoMaggiorazioneDTO) {
    
  }*/
}




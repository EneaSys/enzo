import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ScontoMaggiorazioneLineaDTO, ScontoMaggiorazioneLineaResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-sconto-maggiorazione-linea-detail-page',
  templateUrl: './sconto-maggiorazione-linea-detail-page.component.html',
  styleUrls: ['./sconto-maggiorazione-linea-detail-page.component.scss']
})
export class EnzoScontoMaggiorazioneLineaDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: ScontoMaggiorazioneLineaResourceService,
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

  scontoMaggiorazioneLineaDTO: ScontoMaggiorazioneLineaDTO;

  onLoad() {
    this.scontoMaggiorazioneLineaDTO = this.route.snapshot.data.scontoMaggiorazioneLinea;
  } 

  async reloadPage() {
    this.scontoMaggiorazioneLineaDTO = await this.resourceService.getScontoMaggiorazioneLineaUsingGET(this.scontoMaggiorazioneLineaDTO.id).toPromise();
  }

  /*editScontoMaggiorazioneLinea(scontoMaggiorazioneLinea: ScontoMaggiorazioneLineaDTO) {
    //this.dialog.open(EnzoScontoMaggiorazioneLineaNewUpdateDialogComponent, { data: { scontoMaggiorazioneLinea: scontoMaggiorazioneLinea } });
  }

  async deleteScontoMaggiorazioneLinea(scontoMaggiorazioneLineaDTO: ScontoMaggiorazioneLineaDTO) {
    
  }*/
}




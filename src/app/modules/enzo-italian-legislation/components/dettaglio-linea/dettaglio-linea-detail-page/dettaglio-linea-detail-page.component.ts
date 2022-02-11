import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DettaglioLineaDTO, DettaglioLineaResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dettaglio-linea-detail-page',
  templateUrl: './dettaglio-linea-detail-page.component.html',
  styleUrls: ['./dettaglio-linea-detail-page.component.scss']
})
export class EnzoDettaglioLineaDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DettaglioLineaResourceService,
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

  dettaglioLineaDTO: DettaglioLineaDTO;

  onLoad() {
    this.dettaglioLineaDTO = this.route.snapshot.data.dettaglioLinea;
  } 

  async reloadPage() {
    this.dettaglioLineaDTO = await this.resourceService.getDettaglioLineaUsingGET(this.dettaglioLineaDTO.id).toPromise();
  }

  /*editDettaglioLinea(dettaglioLinea: DettaglioLineaDTO) {
    //this.dialog.open(EnzoDettaglioLineaNewUpdateDialogComponent, { data: { dettaglioLinea: dettaglioLinea } });
  }

  async deleteDettaglioLinea(dettaglioLineaDTO: DettaglioLineaDTO) {
    
  }*/
}




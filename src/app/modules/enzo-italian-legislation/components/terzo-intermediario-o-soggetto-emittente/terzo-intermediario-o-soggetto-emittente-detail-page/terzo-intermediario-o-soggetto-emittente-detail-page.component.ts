import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TerzoIntermediarioOSoggettoEmittenteDTO, TerzoIntermediarioOSoggettoEmittenteResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-terzo-intermediario-o-soggetto-emittente-detail-page',
  templateUrl: './terzo-intermediario-o-soggetto-emittente-detail-page.component.html',
  styleUrls: ['./terzo-intermediario-o-soggetto-emittente-detail-page.component.scss']
})
export class EnzoTerzoIntermediarioOSoggettoEmittenteDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: TerzoIntermediarioOSoggettoEmittenteResourceService,
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

  terzoIntermediarioOSoggettoEmittenteDTO: TerzoIntermediarioOSoggettoEmittenteDTO;

  onLoad() {
    this.terzoIntermediarioOSoggettoEmittenteDTO = this.route.snapshot.data.terzoIntermediarioOSoggettoEmittente;
  } 

  async reloadPage() {
    this.terzoIntermediarioOSoggettoEmittenteDTO = await this.resourceService.getTerzoIntermediarioOSoggettoEmittenteUsingGET(this.terzoIntermediarioOSoggettoEmittenteDTO.id).toPromise();
  }

  /*editTerzoIntermediarioOSoggettoEmittente(terzoIntermediarioOSoggettoEmittente: TerzoIntermediarioOSoggettoEmittenteDTO) {
    //this.dialog.open(EnzoTerzoIntermediarioOSoggettoEmittenteNewUpdateDialogComponent, { data: { terzoIntermediarioOSoggettoEmittente: terzoIntermediarioOSoggettoEmittente } });
  }

  async deleteTerzoIntermediarioOSoggettoEmittente(terzoIntermediarioOSoggettoEmittenteDTO: TerzoIntermediarioOSoggettoEmittenteDTO) {
    
  }*/
}




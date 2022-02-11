import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SoggettoEmittenteDTO, SoggettoEmittenteResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-soggetto-emittente-detail-page',
  templateUrl: './soggetto-emittente-detail-page.component.html',
  styleUrls: ['./soggetto-emittente-detail-page.component.scss']
})
export class EnzoSoggettoEmittenteDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: SoggettoEmittenteResourceService,
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

  soggettoEmittenteDTO: SoggettoEmittenteDTO;

  onLoad() {
    this.soggettoEmittenteDTO = this.route.snapshot.data.soggettoEmittente;
  } 

  async reloadPage() {
    this.soggettoEmittenteDTO = await this.resourceService.getSoggettoEmittenteUsingGET(this.soggettoEmittenteDTO.id).toPromise();
  }

  /*editSoggettoEmittente(soggettoEmittente: SoggettoEmittenteDTO) {
    //this.dialog.open(EnzoSoggettoEmittenteNewUpdateDialogComponent, { data: { soggettoEmittente: soggettoEmittente } });
  }

  async deleteSoggettoEmittente(soggettoEmittenteDTO: SoggettoEmittenteDTO) {
    
  }*/
}




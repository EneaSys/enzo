import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RiferimentoNumeroLineaDTO, RiferimentoNumeroLineaResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-riferimento-numero-linea-detail-page',
  templateUrl: './riferimento-numero-linea-detail-page.component.html',
  styleUrls: ['./riferimento-numero-linea-detail-page.component.scss']
})
export class EnzoRiferimentoNumeroLineaDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: RiferimentoNumeroLineaResourceService,
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

  riferimentoNumeroLineaDTO: RiferimentoNumeroLineaDTO;

  onLoad() {
    this.riferimentoNumeroLineaDTO = this.route.snapshot.data.riferimentoNumeroLinea;
  } 

  async reloadPage() {
    this.riferimentoNumeroLineaDTO = await this.resourceService.getRiferimentoNumeroLineaUsingGET(this.riferimentoNumeroLineaDTO.id).toPromise();
  }

  /*editRiferimentoNumeroLinea(riferimentoNumeroLinea: RiferimentoNumeroLineaDTO) {
    //this.dialog.open(EnzoRiferimentoNumeroLineaNewUpdateDialogComponent, { data: { riferimentoNumeroLinea: riferimentoNumeroLinea } });
  }

  async deleteRiferimentoNumeroLinea(riferimentoNumeroLineaDTO: RiferimentoNumeroLineaDTO) {
    
  }*/
}




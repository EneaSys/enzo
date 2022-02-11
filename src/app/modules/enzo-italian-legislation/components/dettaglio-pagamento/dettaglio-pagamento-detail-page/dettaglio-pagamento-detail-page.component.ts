import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DettaglioPagamentoDTO, DettaglioPagamentoResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dettaglio-pagamento-detail-page',
  templateUrl: './dettaglio-pagamento-detail-page.component.html',
  styleUrls: ['./dettaglio-pagamento-detail-page.component.scss']
})
export class EnzoDettaglioPagamentoDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DettaglioPagamentoResourceService,
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

  dettaglioPagamentoDTO: DettaglioPagamentoDTO;

  onLoad() {
    this.dettaglioPagamentoDTO = this.route.snapshot.data.dettaglioPagamento;
  } 

  async reloadPage() {
    this.dettaglioPagamentoDTO = await this.resourceService.getDettaglioPagamentoUsingGET(this.dettaglioPagamentoDTO.id).toPromise();
  }

  /*editDettaglioPagamento(dettaglioPagamento: DettaglioPagamentoDTO) {
    //this.dialog.open(EnzoDettaglioPagamentoNewUpdateDialogComponent, { data: { dettaglioPagamento: dettaglioPagamento } });
  }

  async deleteDettaglioPagamento(dettaglioPagamentoDTO: DettaglioPagamentoDTO) {
    
  }*/
}




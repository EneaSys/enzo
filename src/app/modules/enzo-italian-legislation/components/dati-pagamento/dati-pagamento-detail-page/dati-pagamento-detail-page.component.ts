import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiPagamentoDTO, DatiPagamentoResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-pagamento-detail-page',
  templateUrl: './dati-pagamento-detail-page.component.html',
  styleUrls: ['./dati-pagamento-detail-page.component.scss']
})
export class EnzoDatiPagamentoDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiPagamentoResourceService,
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

  datiPagamentoDTO: DatiPagamentoDTO;

  onLoad() {
    this.datiPagamentoDTO = this.route.snapshot.data.datiPagamento;
  } 

  async reloadPage() {
    this.datiPagamentoDTO = await this.resourceService.getDatiPagamentoUsingGET(this.datiPagamentoDTO.id).toPromise();
  }

  /*editDatiPagamento(datiPagamento: DatiPagamentoDTO) {
    //this.dialog.open(EnzoDatiPagamentoNewUpdateDialogComponent, { data: { datiPagamento: datiPagamento } });
  }

  async deleteDatiPagamento(datiPagamentoDTO: DatiPagamentoDTO) {
    
  }*/
}




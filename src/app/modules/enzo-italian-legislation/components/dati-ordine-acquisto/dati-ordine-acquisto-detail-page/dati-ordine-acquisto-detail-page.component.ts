import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiOrdineAcquistoDTO, DatiOrdineAcquistoResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-ordine-acquisto-detail-page',
  templateUrl: './dati-ordine-acquisto-detail-page.component.html',
  styleUrls: ['./dati-ordine-acquisto-detail-page.component.scss']
})
export class EnzoDatiOrdineAcquistoDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiOrdineAcquistoResourceService,
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

  datiOrdineAcquistoDTO: DatiOrdineAcquistoDTO;

  onLoad() {
    this.datiOrdineAcquistoDTO = this.route.snapshot.data.datiOrdineAcquisto;
  } 

  async reloadPage() {
    this.datiOrdineAcquistoDTO = await this.resourceService.getDatiOrdineAcquistoUsingGET(this.datiOrdineAcquistoDTO.id).toPromise();
  }

  /*editDatiOrdineAcquisto(datiOrdineAcquisto: DatiOrdineAcquistoDTO) {
    //this.dialog.open(EnzoDatiOrdineAcquistoNewUpdateDialogComponent, { data: { datiOrdineAcquisto: datiOrdineAcquisto } });
  }

  async deleteDatiOrdineAcquisto(datiOrdineAcquistoDTO: DatiOrdineAcquistoDTO) {
    
  }*/
}




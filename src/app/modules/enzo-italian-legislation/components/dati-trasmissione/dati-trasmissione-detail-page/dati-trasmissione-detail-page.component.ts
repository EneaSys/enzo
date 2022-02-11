import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiTrasmissioneDTO, DatiTrasmissioneResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-trasmissione-detail-page',
  templateUrl: './dati-trasmissione-detail-page.component.html',
  styleUrls: ['./dati-trasmissione-detail-page.component.scss']
})
export class EnzoDatiTrasmissioneDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiTrasmissioneResourceService,
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

  datiTrasmissioneDTO: DatiTrasmissioneDTO;

  onLoad() {
    this.datiTrasmissioneDTO = this.route.snapshot.data.datiTrasmissione;
  } 

  async reloadPage() {
    this.datiTrasmissioneDTO = await this.resourceService.getDatiTrasmissioneUsingGET(this.datiTrasmissioneDTO.id).toPromise();
  }

  /*editDatiTrasmissione(datiTrasmissione: DatiTrasmissioneDTO) {
    //this.dialog.open(EnzoDatiTrasmissioneNewUpdateDialogComponent, { data: { datiTrasmissione: datiTrasmissione } });
  }

  async deleteDatiTrasmissione(datiTrasmissioneDTO: DatiTrasmissioneDTO) {
    
  }*/
}




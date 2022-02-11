import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiRitenutaDTO, DatiRitenutaResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-ritenuta-detail-page',
  templateUrl: './dati-ritenuta-detail-page.component.html',
  styleUrls: ['./dati-ritenuta-detail-page.component.scss']
})
export class EnzoDatiRitenutaDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiRitenutaResourceService,
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

  datiRitenutaDTO: DatiRitenutaDTO;

  onLoad() {
    this.datiRitenutaDTO = this.route.snapshot.data.datiRitenuta;
  } 

  async reloadPage() {
    this.datiRitenutaDTO = await this.resourceService.getDatiRitenutaUsingGET(this.datiRitenutaDTO.id).toPromise();
  }

  /*editDatiRitenuta(datiRitenuta: DatiRitenutaDTO) {
    //this.dialog.open(EnzoDatiRitenutaNewUpdateDialogComponent, { data: { datiRitenuta: datiRitenuta } });
  }

  async deleteDatiRitenuta(datiRitenutaDTO: DatiRitenutaDTO) {
    
  }*/
}




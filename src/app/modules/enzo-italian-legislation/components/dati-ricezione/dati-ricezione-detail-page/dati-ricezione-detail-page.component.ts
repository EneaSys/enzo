import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiRicezioneDTO, DatiRicezioneResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-ricezione-detail-page',
  templateUrl: './dati-ricezione-detail-page.component.html',
  styleUrls: ['./dati-ricezione-detail-page.component.scss']
})
export class EnzoDatiRicezioneDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiRicezioneResourceService,
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

  datiRicezioneDTO: DatiRicezioneDTO;

  onLoad() {
    this.datiRicezioneDTO = this.route.snapshot.data.datiRicezione;
  } 

  async reloadPage() {
    this.datiRicezioneDTO = await this.resourceService.getDatiRicezioneUsingGET(this.datiRicezioneDTO.id).toPromise();
  }

  /*editDatiRicezione(datiRicezione: DatiRicezioneDTO) {
    //this.dialog.open(EnzoDatiRicezioneNewUpdateDialogComponent, { data: { datiRicezione: datiRicezione } });
  }

  async deleteDatiRicezione(datiRicezioneDTO: DatiRicezioneDTO) {
    
  }*/
}




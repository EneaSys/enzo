import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiConvenzioneDTO, DatiConvenzioneResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-convenzione-detail-page',
  templateUrl: './dati-convenzione-detail-page.component.html',
  styleUrls: ['./dati-convenzione-detail-page.component.scss']
})
export class EnzoDatiConvenzioneDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiConvenzioneResourceService,
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

  datiConvenzioneDTO: DatiConvenzioneDTO;

  onLoad() {
    this.datiConvenzioneDTO = this.route.snapshot.data.datiConvenzione;
  } 

  async reloadPage() {
    this.datiConvenzioneDTO = await this.resourceService.getDatiConvenzioneUsingGET(this.datiConvenzioneDTO.id).toPromise();
  }

  /*editDatiConvenzione(datiConvenzione: DatiConvenzioneDTO) {
    //this.dialog.open(EnzoDatiConvenzioneNewUpdateDialogComponent, { data: { datiConvenzione: datiConvenzione } });
  }

  async deleteDatiConvenzione(datiConvenzioneDTO: DatiConvenzioneDTO) {
    
  }*/
}




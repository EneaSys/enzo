import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiVeicoliDTO, DatiVeicoliResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-veicoli-detail-page',
  templateUrl: './dati-veicoli-detail-page.component.html',
  styleUrls: ['./dati-veicoli-detail-page.component.scss']
})
export class EnzoDatiVeicoliDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiVeicoliResourceService,
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

  datiVeicoliDTO: DatiVeicoliDTO;

  onLoad() {
    this.datiVeicoliDTO = this.route.snapshot.data.datiVeicoli;
  } 

  async reloadPage() {
    this.datiVeicoliDTO = await this.resourceService.getDatiVeicoliUsingGET(this.datiVeicoliDTO.id).toPromise();
  }

  /*editDatiVeicoli(datiVeicoli: DatiVeicoliDTO) {
    //this.dialog.open(EnzoDatiVeicoliNewUpdateDialogComponent, { data: { datiVeicoli: datiVeicoli } });
  }

  async deleteDatiVeicoli(datiVeicoliDTO: DatiVeicoliDTO) {
    
  }*/
}




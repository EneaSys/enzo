import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiCassaPrevidenzialeDTO, DatiCassaPrevidenzialeResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-cassa-previdenziale-detail-page',
  templateUrl: './dati-cassa-previdenziale-detail-page.component.html',
  styleUrls: ['./dati-cassa-previdenziale-detail-page.component.scss']
})
export class EnzoDatiCassaPrevidenzialeDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiCassaPrevidenzialeResourceService,
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

  datiCassaPrevidenzialeDTO: DatiCassaPrevidenzialeDTO;

  onLoad() {
    this.datiCassaPrevidenzialeDTO = this.route.snapshot.data.datiCassaPrevidenziale;
  } 

  async reloadPage() {
    this.datiCassaPrevidenzialeDTO = await this.resourceService.getDatiCassaPrevidenzialeUsingGET(this.datiCassaPrevidenzialeDTO.id).toPromise();
  }

  /*editDatiCassaPrevidenziale(datiCassaPrevidenziale: DatiCassaPrevidenzialeDTO) {
    //this.dialog.open(EnzoDatiCassaPrevidenzialeNewUpdateDialogComponent, { data: { datiCassaPrevidenziale: datiCassaPrevidenziale } });
  }

  async deleteDatiCassaPrevidenziale(datiCassaPrevidenzialeDTO: DatiCassaPrevidenzialeDTO) {
    
  }*/
}




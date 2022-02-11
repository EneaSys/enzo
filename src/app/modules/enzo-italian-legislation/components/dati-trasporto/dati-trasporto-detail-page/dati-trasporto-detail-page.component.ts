import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiTrasportoDTO, DatiTrasportoResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-trasporto-detail-page',
  templateUrl: './dati-trasporto-detail-page.component.html',
  styleUrls: ['./dati-trasporto-detail-page.component.scss']
})
export class EnzoDatiTrasportoDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiTrasportoResourceService,
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

  datiTrasportoDTO: DatiTrasportoDTO;

  onLoad() {
    this.datiTrasportoDTO = this.route.snapshot.data.datiTrasporto;
  } 

  async reloadPage() {
    this.datiTrasportoDTO = await this.resourceService.getDatiTrasportoUsingGET(this.datiTrasportoDTO.id).toPromise();
  }

  /*editDatiTrasporto(datiTrasporto: DatiTrasportoDTO) {
    //this.dialog.open(EnzoDatiTrasportoNewUpdateDialogComponent, { data: { datiTrasporto: datiTrasporto } });
  }

  async deleteDatiTrasporto(datiTrasportoDTO: DatiTrasportoDTO) {
    
  }*/
}




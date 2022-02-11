import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FatturaElettronicaBodyDTO, FatturaElettronicaBodyResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-fattura-elettronica-body-detail-page',
  templateUrl: './fattura-elettronica-body-detail-page.component.html',
  styleUrls: ['./fattura-elettronica-body-detail-page.component.scss']
})
export class EnzoFatturaElettronicaBodyDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: FatturaElettronicaBodyResourceService,
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

  fatturaElettronicaBodyDTO: FatturaElettronicaBodyDTO;

  onLoad() {
    this.fatturaElettronicaBodyDTO = this.route.snapshot.data.fatturaElettronicaBody;
  } 

  async reloadPage() {
    this.fatturaElettronicaBodyDTO = await this.resourceService.getFatturaElettronicaBodyUsingGET(this.fatturaElettronicaBodyDTO.id).toPromise();
  }

  /*editFatturaElettronicaBody(fatturaElettronicaBody: FatturaElettronicaBodyDTO) {
    //this.dialog.open(EnzoFatturaElettronicaBodyNewUpdateDialogComponent, { data: { fatturaElettronicaBody: fatturaElettronicaBody } });
  }

  async deleteFatturaElettronicaBody(fatturaElettronicaBodyDTO: FatturaElettronicaBodyDTO) {
    
  }*/
}




import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FatturaElettronicaHeaderDTO, FatturaElettronicaHeaderResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-fattura-elettronica-header-detail-page',
  templateUrl: './fattura-elettronica-header-detail-page.component.html',
  styleUrls: ['./fattura-elettronica-header-detail-page.component.scss']
})
export class EnzoFatturaElettronicaHeaderDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: FatturaElettronicaHeaderResourceService,
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

  fatturaElettronicaHeaderDTO: FatturaElettronicaHeaderDTO;

  onLoad() {
    this.fatturaElettronicaHeaderDTO = this.route.snapshot.data.fatturaElettronicaHeader;
  } 

  async reloadPage() {
    this.fatturaElettronicaHeaderDTO = await this.resourceService.getFatturaElettronicaHeaderUsingGET(this.fatturaElettronicaHeaderDTO.id).toPromise();
  }

  /*editFatturaElettronicaHeader(fatturaElettronicaHeader: FatturaElettronicaHeaderDTO) {
    //this.dialog.open(EnzoFatturaElettronicaHeaderNewUpdateDialogComponent, { data: { fatturaElettronicaHeader: fatturaElettronicaHeader } });
  }

  async deleteFatturaElettronicaHeader(fatturaElettronicaHeaderDTO: FatturaElettronicaHeaderDTO) {
    
  }*/
}




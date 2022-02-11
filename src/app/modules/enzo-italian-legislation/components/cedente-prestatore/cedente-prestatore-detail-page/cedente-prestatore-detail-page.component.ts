import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CedentePrestatoreDTO, CedentePrestatoreResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-cedente-prestatore-detail-page',
  templateUrl: './cedente-prestatore-detail-page.component.html',
  styleUrls: ['./cedente-prestatore-detail-page.component.scss']
})
export class EnzoCedentePrestatoreDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: CedentePrestatoreResourceService,
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

  cedentePrestatoreDTO: CedentePrestatoreDTO;

  onLoad() {
    this.cedentePrestatoreDTO = this.route.snapshot.data.cedentePrestatore;
  } 

  async reloadPage() {
    this.cedentePrestatoreDTO = await this.resourceService.getCedentePrestatoreUsingGET(this.cedentePrestatoreDTO.id).toPromise();
  }

  /*editCedentePrestatore(cedentePrestatore: CedentePrestatoreDTO) {
    //this.dialog.open(EnzoCedentePrestatoreNewUpdateDialogComponent, { data: { cedentePrestatore: cedentePrestatore } });
  }

  async deleteCedentePrestatore(cedentePrestatoreDTO: CedentePrestatoreDTO) {
    
  }*/
}




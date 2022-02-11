import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RappresentanteFiscaleDTO, RappresentanteFiscaleResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-rappresentante-fiscale-detail-page',
  templateUrl: './rappresentante-fiscale-detail-page.component.html',
  styleUrls: ['./rappresentante-fiscale-detail-page.component.scss']
})
export class EnzoRappresentanteFiscaleDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: RappresentanteFiscaleResourceService,
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

  rappresentanteFiscaleDTO: RappresentanteFiscaleDTO;

  onLoad() {
    this.rappresentanteFiscaleDTO = this.route.snapshot.data.rappresentanteFiscale;
  } 

  async reloadPage() {
    this.rappresentanteFiscaleDTO = await this.resourceService.getRappresentanteFiscaleUsingGET(this.rappresentanteFiscaleDTO.id).toPromise();
  }

  /*editRappresentanteFiscale(rappresentanteFiscale: RappresentanteFiscaleDTO) {
    //this.dialog.open(EnzoRappresentanteFiscaleNewUpdateDialogComponent, { data: { rappresentanteFiscale: rappresentanteFiscale } });
  }

  async deleteRappresentanteFiscale(rappresentanteFiscaleDTO: RappresentanteFiscaleDTO) {
    
  }*/
}




import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IndirizzoResaDTO, IndirizzoResaResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-indirizzo-resa-detail-page',
  templateUrl: './indirizzo-resa-detail-page.component.html',
  styleUrls: ['./indirizzo-resa-detail-page.component.scss']
})
export class EnzoIndirizzoResaDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: IndirizzoResaResourceService,
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

  indirizzoResaDTO: IndirizzoResaDTO;

  onLoad() {
    this.indirizzoResaDTO = this.route.snapshot.data.indirizzoResa;
  } 

  async reloadPage() {
    this.indirizzoResaDTO = await this.resourceService.getIndirizzoResaUsingGET(this.indirizzoResaDTO.id).toPromise();
  }

  /*editIndirizzoResa(indirizzoResa: IndirizzoResaDTO) {
    //this.dialog.open(EnzoIndirizzoResaNewUpdateDialogComponent, { data: { indirizzoResa: indirizzoResa } });
  }

  async deleteIndirizzoResa(indirizzoResaDTO: IndirizzoResaDTO) {
    
  }*/
}




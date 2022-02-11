import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiDdtDTO, DatiDdtResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-ddt-detail-page',
  templateUrl: './dati-ddt-detail-page.component.html',
  styleUrls: ['./dati-ddt-detail-page.component.scss']
})
export class EnzoDatiDdtDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiDdtResourceService,
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

  datiDdtDTO: DatiDdtDTO;

  onLoad() {
    this.datiDdtDTO = this.route.snapshot.data.datiDdt;
  } 

  async reloadPage() {
    this.datiDdtDTO = await this.resourceService.getDatiDdtUsingGET(this.datiDdtDTO.id).toPromise();
  }

  /*editDatiDdt(datiDdt: DatiDdtDTO) {
    //this.dialog.open(EnzoDatiDdtNewUpdateDialogComponent, { data: { datiDdt: datiDdt } });
  }

  async deleteDatiDdt(datiDdtDTO: DatiDdtDTO) {
    
  }*/
}




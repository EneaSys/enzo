import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiSalDTO, DatiSalResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-sal-detail-page',
  templateUrl: './dati-sal-detail-page.component.html',
  styleUrls: ['./dati-sal-detail-page.component.scss']
})
export class EnzoDatiSalDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiSalResourceService,
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

  datiSalDTO: DatiSalDTO;

  onLoad() {
    this.datiSalDTO = this.route.snapshot.data.datiSal;
  } 

  async reloadPage() {
    this.datiSalDTO = await this.resourceService.getDatiSalUsingGET(this.datiSalDTO.id).toPromise();
  }

  /*editDatiSal(datiSal: DatiSalDTO) {
    //this.dialog.open(EnzoDatiSalNewUpdateDialogComponent, { data: { datiSal: datiSal } });
  }

  async deleteDatiSal(datiSalDTO: DatiSalDTO) {
    
  }*/
}




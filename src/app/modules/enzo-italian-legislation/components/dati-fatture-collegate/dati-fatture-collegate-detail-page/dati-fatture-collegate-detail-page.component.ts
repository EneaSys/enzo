import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiFattureCollegateDTO, DatiFattureCollegateResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-fatture-collegate-detail-page',
  templateUrl: './dati-fatture-collegate-detail-page.component.html',
  styleUrls: ['./dati-fatture-collegate-detail-page.component.scss']
})
export class EnzoDatiFattureCollegateDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiFattureCollegateResourceService,
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

  datiFattureCollegateDTO: DatiFattureCollegateDTO;

  onLoad() {
    this.datiFattureCollegateDTO = this.route.snapshot.data.datiFattureCollegate;
  } 

  async reloadPage() {
    this.datiFattureCollegateDTO = await this.resourceService.getDatiFattureCollegateUsingGET(this.datiFattureCollegateDTO.id).toPromise();
  }

  /*editDatiFattureCollegate(datiFattureCollegate: DatiFattureCollegateDTO) {
    //this.dialog.open(EnzoDatiFattureCollegateNewUpdateDialogComponent, { data: { datiFattureCollegate: datiFattureCollegate } });
  }

  async deleteDatiFattureCollegate(datiFattureCollegateDTO: DatiFattureCollegateDTO) {
    
  }*/
}




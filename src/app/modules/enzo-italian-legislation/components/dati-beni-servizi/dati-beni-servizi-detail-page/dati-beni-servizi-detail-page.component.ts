import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiBeniServiziDTO, DatiBeniServiziResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-beni-servizi-detail-page',
  templateUrl: './dati-beni-servizi-detail-page.component.html',
  styleUrls: ['./dati-beni-servizi-detail-page.component.scss']
})
export class EnzoDatiBeniServiziDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiBeniServiziResourceService,
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

  datiBeniServiziDTO: DatiBeniServiziDTO;

  onLoad() {
    this.datiBeniServiziDTO = this.route.snapshot.data.datiBeniServizi;
  } 

  async reloadPage() {
    this.datiBeniServiziDTO = await this.resourceService.getDatiBeniServiziUsingGET(this.datiBeniServiziDTO.id).toPromise();
  }

  /*editDatiBeniServizi(datiBeniServizi: DatiBeniServiziDTO) {
    //this.dialog.open(EnzoDatiBeniServiziNewUpdateDialogComponent, { data: { datiBeniServizi: datiBeniServizi } });
  }

  async deleteDatiBeniServizi(datiBeniServiziDTO: DatiBeniServiziDTO) {
    
  }*/
}




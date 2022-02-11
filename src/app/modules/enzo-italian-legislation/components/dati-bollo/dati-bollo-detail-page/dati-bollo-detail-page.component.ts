import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiBolloDTO, DatiBolloResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-bollo-detail-page',
  templateUrl: './dati-bollo-detail-page.component.html',
  styleUrls: ['./dati-bollo-detail-page.component.scss']
})
export class EnzoDatiBolloDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiBolloResourceService,
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

  datiBolloDTO: DatiBolloDTO;

  onLoad() {
    this.datiBolloDTO = this.route.snapshot.data.datiBollo;
  } 

  async reloadPage() {
    this.datiBolloDTO = await this.resourceService.getDatiBolloUsingGET(this.datiBolloDTO.id).toPromise();
  }

  /*editDatiBollo(datiBollo: DatiBolloDTO) {
    //this.dialog.open(EnzoDatiBolloNewUpdateDialogComponent, { data: { datiBollo: datiBollo } });
  }

  async deleteDatiBollo(datiBolloDTO: DatiBolloDTO) {
    
  }*/
}




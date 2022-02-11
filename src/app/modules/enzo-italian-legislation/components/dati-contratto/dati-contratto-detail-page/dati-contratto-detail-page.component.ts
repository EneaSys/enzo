import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiContrattoDTO, DatiContrattoResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-contratto-detail-page',
  templateUrl: './dati-contratto-detail-page.component.html',
  styleUrls: ['./dati-contratto-detail-page.component.scss']
})
export class EnzoDatiContrattoDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiContrattoResourceService,
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

  datiContrattoDTO: DatiContrattoDTO;

  onLoad() {
    this.datiContrattoDTO = this.route.snapshot.data.datiContratto;
  } 

  async reloadPage() {
    this.datiContrattoDTO = await this.resourceService.getDatiContrattoUsingGET(this.datiContrattoDTO.id).toPromise();
  }

  /*editDatiContratto(datiContratto: DatiContrattoDTO) {
    //this.dialog.open(EnzoDatiContrattoNewUpdateDialogComponent, { data: { datiContratto: datiContratto } });
  }

  async deleteDatiContratto(datiContrattoDTO: DatiContrattoDTO) {
    
  }*/
}




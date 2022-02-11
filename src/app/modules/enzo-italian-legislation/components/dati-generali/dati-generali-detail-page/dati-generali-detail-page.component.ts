import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiGeneraliDTO, DatiGeneraliResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-generali-detail-page',
  templateUrl: './dati-generali-detail-page.component.html',
  styleUrls: ['./dati-generali-detail-page.component.scss']
})
export class EnzoDatiGeneraliDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiGeneraliResourceService,
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

  datiGeneraliDTO: DatiGeneraliDTO;

  onLoad() {
    this.datiGeneraliDTO = this.route.snapshot.data.datiGenerali;
  } 

  async reloadPage() {
    this.datiGeneraliDTO = await this.resourceService.getDatiGeneraliUsingGET(this.datiGeneraliDTO.id).toPromise();
  }

  /*editDatiGenerali(datiGenerali: DatiGeneraliDTO) {
    //this.dialog.open(EnzoDatiGeneraliNewUpdateDialogComponent, { data: { datiGenerali: datiGenerali } });
  }

  async deleteDatiGenerali(datiGeneraliDTO: DatiGeneraliDTO) {
    
  }*/
}




import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AllegatiDTO, AllegatiResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-allegati-detail-page',
  templateUrl: './allegati-detail-page.component.html',
  styleUrls: ['./allegati-detail-page.component.scss']
})
export class EnzoAllegatiDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: AllegatiResourceService,
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

  allegatiDTO: AllegatiDTO;

  onLoad() {
    this.allegatiDTO = this.route.snapshot.data.allegati;
  } 

  async reloadPage() {
    this.allegatiDTO = await this.resourceService.getAllegatiUsingGET(this.allegatiDTO.id).toPromise();
  }

  /*editAllegati(allegati: AllegatiDTO) {
    //this.dialog.open(EnzoAllegatiNewUpdateDialogComponent, { data: { allegati: allegati } });
  }

  async deleteAllegati(allegatiDTO: AllegatiDTO) {
    
  }*/
}




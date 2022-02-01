import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ReferentDTO, ReferentResourceService} from 'aig-generic';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-referent-detail-page',
  templateUrl: './referent-detail-page.component.html',
  styleUrls: ['./referent-detail-page.component.scss']
})
export class EnzoReferentDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: ReferentResourceService,
    private route: ActivatedRoute,
    public _gcs: EnzoGenericComponentService1,
    agcs: AgalCommonService,
  ) {
      super(_gcs);
      this.onLoad();
    }

  id: number;

  referentDTO: ReferentDTO;

  onLoad() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.tmCurrentComponent.name = this.tmCurrentComponent.name = 'Detail ' + this.id;
    this.referentDTO = this.route.snapshot.data.referent;
  } 

  async reloadPage() {
    this.referentDTO = await this.resourceService.getReferentUsingGET(this.referentDTO.id).toPromise();
  }

  /*editReferent(referent: ReferentDTO) {
    //this.dialog.open(EnzoReferentNewUpdateDialogComponent, { data: { referent: referent } });
  }

  async deleteReferent(referentDTO: ReferentDTO) {
    
  }*/
}




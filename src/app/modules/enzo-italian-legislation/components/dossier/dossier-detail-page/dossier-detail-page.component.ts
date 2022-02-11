import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DossierDTO, DossierResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dossier-detail-page',
  templateUrl: './dossier-detail-page.component.html',
  styleUrls: ['./dossier-detail-page.component.scss']
})
export class EnzoDossierDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DossierResourceService,
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

  dossierDTO: DossierDTO;

  onLoad() {
    this.dossierDTO = this.route.snapshot.data.dossier;
  } 

  async reloadPage() {
    this.dossierDTO = await this.resourceService.getDossierUsingGET(this.dossierDTO.id).toPromise();
  }

  /*editDossier(dossier: DossierDTO) {
    //this.dialog.open(EnzoDossierNewUpdateDialogComponent, { data: { dossier: dossier } });
  }

  async deleteDossier(dossierDTO: DossierDTO) {
    
  }*/
}




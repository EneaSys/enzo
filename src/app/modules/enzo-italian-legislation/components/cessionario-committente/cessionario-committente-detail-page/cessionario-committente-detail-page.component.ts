import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CessionarioCommittenteDTO, CessionarioCommittenteResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-cessionario-committente-detail-page',
  templateUrl: './cessionario-committente-detail-page.component.html',
  styleUrls: ['./cessionario-committente-detail-page.component.scss']
})
export class EnzoCessionarioCommittenteDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: CessionarioCommittenteResourceService,
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

  cessionarioCommittenteDTO: CessionarioCommittenteDTO;

  onLoad() {
    this.cessionarioCommittenteDTO = this.route.snapshot.data.cessionarioCommittente;
  } 

  async reloadPage() {
    this.cessionarioCommittenteDTO = await this.resourceService.getCessionarioCommittenteUsingGET(this.cessionarioCommittenteDTO.id).toPromise();
  }

  /*editCessionarioCommittente(cessionarioCommittente: CessionarioCommittenteDTO) {
    //this.dialog.open(EnzoCessionarioCommittenteNewUpdateDialogComponent, { data: { cessionarioCommittente: cessionarioCommittente } });
  }

  async deleteCessionarioCommittente(cessionarioCommittenteDTO: CessionarioCommittenteDTO) {
    
  }*/
}




import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FatturaPrincipaleDTO, FatturaPrincipaleResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-fattura-principale-detail-page',
  templateUrl: './fattura-principale-detail-page.component.html',
  styleUrls: ['./fattura-principale-detail-page.component.scss']
})
export class EnzoFatturaPrincipaleDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: FatturaPrincipaleResourceService,
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

  fatturaPrincipaleDTO: FatturaPrincipaleDTO;

  onLoad() {
    this.fatturaPrincipaleDTO = this.route.snapshot.data.fatturaPrincipale;
  } 

  async reloadPage() {
    this.fatturaPrincipaleDTO = await this.resourceService.getFatturaPrincipaleUsingGET(this.fatturaPrincipaleDTO.id).toPromise();
  }

  /*editFatturaPrincipale(fatturaPrincipale: FatturaPrincipaleDTO) {
    //this.dialog.open(EnzoFatturaPrincipaleNewUpdateDialogComponent, { data: { fatturaPrincipale: fatturaPrincipale } });
  }

  async deleteFatturaPrincipale(fatturaPrincipaleDTO: FatturaPrincipaleDTO) {
    
  }*/
}




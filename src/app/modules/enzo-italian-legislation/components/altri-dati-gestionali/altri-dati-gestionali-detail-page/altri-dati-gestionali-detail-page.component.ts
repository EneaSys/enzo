import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AltriDatiGestionaliDTO, AltriDatiGestionaliResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-altri-dati-gestionali-detail-page',
  templateUrl: './altri-dati-gestionali-detail-page.component.html',
  styleUrls: ['./altri-dati-gestionali-detail-page.component.scss']
})
export class EnzoAltriDatiGestionaliDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: AltriDatiGestionaliResourceService,
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

  altriDatiGestionaliDTO: AltriDatiGestionaliDTO;

  onLoad() {
    this.altriDatiGestionaliDTO = this.route.snapshot.data.altriDatiGestionali;
  } 

  async reloadPage() {
    this.altriDatiGestionaliDTO = await this.resourceService.getAltriDatiGestionaliUsingGET(this.altriDatiGestionaliDTO.id).toPromise();
  }

  /*editAltriDatiGestionali(altriDatiGestionali: AltriDatiGestionaliDTO) {
    //this.dialog.open(EnzoAltriDatiGestionaliNewUpdateDialogComponent, { data: { altriDatiGestionali: altriDatiGestionali } });
  }

  async deleteAltriDatiGestionali(altriDatiGestionaliDTO: AltriDatiGestionaliDTO) {
    
  }*/
}




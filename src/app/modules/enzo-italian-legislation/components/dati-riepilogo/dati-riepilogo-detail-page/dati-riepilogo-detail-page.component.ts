import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiRiepilogoDTO, DatiRiepilogoResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-riepilogo-detail-page',
  templateUrl: './dati-riepilogo-detail-page.component.html',
  styleUrls: ['./dati-riepilogo-detail-page.component.scss']
})
export class EnzoDatiRiepilogoDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiRiepilogoResourceService,
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

  datiRiepilogoDTO: DatiRiepilogoDTO;

  onLoad() {
    this.datiRiepilogoDTO = this.route.snapshot.data.datiRiepilogo;
  } 

  async reloadPage() {
    this.datiRiepilogoDTO = await this.resourceService.getDatiRiepilogoUsingGET(this.datiRiepilogoDTO.id).toPromise();
  }

  /*editDatiRiepilogo(datiRiepilogo: DatiRiepilogoDTO) {
    //this.dialog.open(EnzoDatiRiepilogoNewUpdateDialogComponent, { data: { datiRiepilogo: datiRiepilogo } });
  }

  async deleteDatiRiepilogo(datiRiepilogoDTO: DatiRiepilogoDTO) {
    
  }*/
}




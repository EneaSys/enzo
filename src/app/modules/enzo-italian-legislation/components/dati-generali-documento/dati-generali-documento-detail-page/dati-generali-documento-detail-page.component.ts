import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DatiGeneraliDocumentoDTO, DatiGeneraliDocumentoResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-dati-generali-documento-detail-page',
  templateUrl: './dati-generali-documento-detail-page.component.html',
  styleUrls: ['./dati-generali-documento-detail-page.component.scss']
})
export class EnzoDatiGeneraliDocumentoDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DatiGeneraliDocumentoResourceService,
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

  datiGeneraliDocumentoDTO: DatiGeneraliDocumentoDTO;

  onLoad() {
    this.datiGeneraliDocumentoDTO = this.route.snapshot.data.datiGeneraliDocumento;
  } 

  async reloadPage() {
    this.datiGeneraliDocumentoDTO = await this.resourceService.getDatiGeneraliDocumentoUsingGET(this.datiGeneraliDocumentoDTO.id).toPromise();
  }

  /*editDatiGeneraliDocumento(datiGeneraliDocumento: DatiGeneraliDocumentoDTO) {
    //this.dialog.open(EnzoDatiGeneraliDocumentoNewUpdateDialogComponent, { data: { datiGeneraliDocumento: datiGeneraliDocumento } });
  }

  async deleteDatiGeneraliDocumento(datiGeneraliDocumentoDTO: DatiGeneraliDocumentoDTO) {
    
  }*/
}




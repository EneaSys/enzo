import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DesignatedCompanyDTO, DesignatedCompanyResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-designated-company-detail-page',
  templateUrl: './designated-company-detail-page.component.html',
  styleUrls: ['./designated-company-detail-page.component.scss']
})
export class EnzoDesignatedCompanyDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: DesignatedCompanyResourceService,
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

  designatedCompanyDTO: DesignatedCompanyDTO;

  onLoad() {
    this.designatedCompanyDTO = this.route.snapshot.data.designatedCompany;
  } 

  async reloadPage() {
    this.designatedCompanyDTO = await this.resourceService.getDesignatedCompanyUsingGET(this.designatedCompanyDTO.id).toPromise();
  }

  /*editDesignatedCompany(designatedCompany: DesignatedCompanyDTO) {
    //this.dialog.open(EnzoDesignatedCompanyNewUpdateDialogComponent, { data: { designatedCompany: designatedCompany } });
  }

  async deleteDesignatedCompany(designatedCompanyDTO: DesignatedCompanyDTO) {
    
  }*/
}




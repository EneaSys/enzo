import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InsurancePolicyStatusDTO, InsurancePolicyStatusResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-insurance-policy-status-detail-page',
  templateUrl: './insurance-policy-status-detail-page.component.html',
  styleUrls: ['./insurance-policy-status-detail-page.component.scss']
})
export class EnzoInsurancePolicyStatusDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: InsurancePolicyStatusResourceService,
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

  insurancePolicyStatusDTO: InsurancePolicyStatusDTO;

  onLoad() {
    this.insurancePolicyStatusDTO = this.route.snapshot.data.insurancePolicyStatus;
  } 

  async reloadPage() {
    this.insurancePolicyStatusDTO = await this.resourceService.getInsurancePolicyStatusUsingGET(this.insurancePolicyStatusDTO.id).toPromise();
  }

  /*editInsurancePolicyStatus(insurancePolicyStatus: InsurancePolicyStatusDTO) {
    //this.dialog.open(EnzoInsurancePolicyStatusNewUpdateDialogComponent, { data: { insurancePolicyStatus: insurancePolicyStatus } });
  }

  async deleteInsurancePolicyStatus(insurancePolicyStatusDTO: InsurancePolicyStatusDTO) {
    
  }*/
}




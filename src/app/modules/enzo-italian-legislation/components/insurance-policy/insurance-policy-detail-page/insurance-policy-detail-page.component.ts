import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { InsurancePolicyDTO, InsurancePolicyResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-insurance-policy-detail-page',
  templateUrl: './insurance-policy-detail-page.component.html',
  styleUrls: ['./insurance-policy-detail-page.component.scss']
})
export class EnzoInsurancePolicyDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: InsurancePolicyResourceService,
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

  insurancePolicyDTO: InsurancePolicyDTO;

  onLoad() {
    this.insurancePolicyDTO = this.route.snapshot.data.insurancePolicy;
  } 

  async reloadPage() {
    this.insurancePolicyDTO = await this.resourceService.getInsurancePolicyUsingGET(this.insurancePolicyDTO.id).toPromise();
  }

  /*editInsurancePolicy(insurancePolicy: InsurancePolicyDTO) {
    //this.dialog.open(EnzoInsurancePolicyNewUpdateDialogComponent, { data: { insurancePolicy: insurancePolicy } });
  }

  async deleteInsurancePolicy(insurancePolicyDTO: InsurancePolicyDTO) {
    
  }*/
}




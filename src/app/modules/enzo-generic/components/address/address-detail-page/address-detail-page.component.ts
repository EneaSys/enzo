import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { AddressDTO, AddressResourceService} from 'aig-generic';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-address-detail-page',
  templateUrl: './address-detail-page.component.html',
  styleUrls: ['./address-detail-page.component.scss']
})
export class EnzoAddressDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: AddressResourceService,
    private route: ActivatedRoute,
    public _gcs: EnzoGenericComponentService1,
    agcs: AgalCommonService,
  ) {
      super(_gcs);
      this.onLoad();
    }

  id: number;

  addressDTO: AddressDTO;

  onLoad() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.tmCurrentComponent.name = this.tmCurrentComponent.name = 'Detail ' + this.id;
    this.addressDTO = this.route.snapshot.data.address;
  } 

  async reloadPage() {
    this.addressDTO = await this.resourceService.getAddressUsingGET(this.addressDTO.id).toPromise();
  }

  /*editAddress(address: AddressDTO) {
    //this.dialog.open(EnzoAddressNewUpdateDialogComponent, { data: { address: address } });
  }

  async deleteAddress(addressDTO: AddressDTO) {
    
  }*/
}




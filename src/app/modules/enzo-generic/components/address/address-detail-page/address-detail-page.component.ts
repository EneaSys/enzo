import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from "@angular/router";
import { AddressDTO, AddressResourceService} from 'aig-generic';
import { AgalCommonService } from "@agal-core/services/common.service";
import { AgalGenericComponent } from "@agal-core/components/agal-generic-component";

@Component({
  selector: 'enzo-address-detail-page',
  templateUrl: './address-detail-page.component.html',
  styleUrls: ['./address-detail-page.component.scss']
})
export class EnzoAddressDetailPageComponent extends AgalGenericComponent {
  constructor(
    private resourceService: AddressResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    agcs: AgalCommonService,
  ) { super(agcs) }

  addressDTO: AddressDTO;

  loadPage() {
    this.addressDTO = this.route.snapshot.data.address;
  }

  async reloadPage() {
    this.addressDTO = await this.resourceService.getAddressUsingGET(this.addressDTO.id).toPromise();
  }

  editAddress(address: AddressDTO) {
    //this.dialog.open(EnzoAddressNewUpdateDialogComponent, { data: { address: address } });
  }

  async deleteAddress(addressDTO: AddressDTO) {
    
  }

}
import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ContactDTO, ContactResourceService} from 'aig-generic';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class EnzoContactDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: ContactResourceService,
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

  contactDTO: ContactDTO;

  onLoad() {
    this.contactDTO = this.route.snapshot.data.contact;
  } 

  async reloadPage() {
    this.contactDTO = await this.resourceService.getContactUsingGET(this.contactDTO.id).toPromise();
  }

  /*editContact(contact: ContactDTO) {
    //this.dialog.open(EnzoContactNewUpdateDialogComponent, { data: { contact: contact } });
  }

  async deleteContact(contactDTO: ContactDTO) {
    
  }*/
}




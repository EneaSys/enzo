import { Component } from "@angular/core";
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from "@angular/router";
import { ContactDTO, ContactResourceService} from 'aig-generic';
import { AgalCommonService } from "@agal-core/services/common.service";
import { AgalGenericComponent } from "@agal-core/components/agal-generic-component";

@Component({
  selector: 'enzo-contact-detail-page',
  templateUrl: './contact-detail-page.component.html',
  styleUrls: ['./contact-detail-page.component.scss']
})
export class EnzoContactDetailPageComponent extends AgalGenericComponent {
  constructor(
    private resourceService: ContactResourceService,
    private route: ActivatedRoute,
    private dialog: MatDialog,
    agcs: AgalCommonService,
  ) { super(agcs) }

  contactDTO: ContactDTO;

  loadPage() {
    this.contactDTO = this.route.snapshot.data.contact;
  }

  async reloadPage() {
    this.contactDTO = await this.resourceService.getContactUsingGET(this.contactDTO.id).toPromise();
  }

  editContact(contact: ContactDTO) {
    //this.dialog.open(EnzoContactNewUpdateDialogComponent, { data: { contact: contact } });
  }

  async deleteContact(contactDTO: ContactDTO) {
    
  }

}
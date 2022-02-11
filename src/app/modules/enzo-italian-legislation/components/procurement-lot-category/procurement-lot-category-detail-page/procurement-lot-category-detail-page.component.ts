import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProcurementLotCategoryDTO, ProcurementLotCategoryResourceService} from 'aig-italianlegislation';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";

@Component({
  selector: 'enzo-procurement-lot-category-detail-page',
  templateUrl: './procurement-lot-category-detail-page.component.html',
  styleUrls: ['./procurement-lot-category-detail-page.component.scss']
})
export class EnzoProcurementLotCategoryDetailPageComponent extends EnzoGenericComponent1 {
  constructor(
    private resourceService: ProcurementLotCategoryResourceService,
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

  procurementLotCategoryDTO: ProcurementLotCategoryDTO;

  onLoad() {
    this.procurementLotCategoryDTO = this.route.snapshot.data.procurementLotCategory;
  } 

  async reloadPage() {
    this.procurementLotCategoryDTO = await this.resourceService.getProcurementLotCategoryUsingGET(this.procurementLotCategoryDTO.id).toPromise();
  }

  /*editProcurementLotCategory(procurementLotCategory: ProcurementLotCategoryDTO) {
    //this.dialog.open(EnzoProcurementLotCategoryNewUpdateDialogComponent, { data: { procurementLotCategory: procurementLotCategory } });
  }

  async deleteProcurementLotCategory(procurementLotCategoryDTO: ProcurementLotCategoryDTO) {
    
  }*/
}




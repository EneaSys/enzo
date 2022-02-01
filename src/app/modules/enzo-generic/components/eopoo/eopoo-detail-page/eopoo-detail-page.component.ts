import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { EopooDTO, EopooResourceService } from 'aig-generic';
import { AgalCommonService } from "@agal-core/services/common.service";
import { EnzoGenericComponent1 } from "app/shared/generic1.component";
import { EnzoGenericComponentService1 } from "app/shared/generic-component1.service";
import { EopooNamePipe } from "@agal-generic/pipe/eopoo-name.pipe";

@Component({
    selector: 'enzo-eopoo-detail-page',
    templateUrl: './eopoo-detail-page.component.html',
    styleUrls: ['./eopoo-detail-page.component.scss']
})
export class EnzoEopooDetailPageComponent extends EnzoGenericComponent1 {
    constructor(
        private resourceService: EopooResourceService,
        private eopooName: EopooNamePipe,
        private route: ActivatedRoute,
        public _gcs: EnzoGenericComponentService1,
        agcs: AgalCommonService,
    ) {
        super(_gcs);
        this.onLoad();
    }

    id: number;

    eopooDTO: EopooDTO;

    onLoad() {
        this.tmCurrentComponent.name = this.eopooName.transform(this.route.snapshot.data.eopoo);
        this.eopooDTO = this.route.snapshot.data.eopoo;
    }



    editEopoo(eopoo: EopooDTO) {
        //this.dialog.open(EnzoEopooNewUpdateDialogComponent, { data: { eopoo: eopoo } });
    }

    async deleteEopoo(eopooDTO: EopooDTO) {

    }
}
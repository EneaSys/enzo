import { Component, Input, OnInit } from '@angular/core';
import { EopooDTO } from 'aig-generic';

@Component({
    selector: 'agal-eopoo-detail-box',
    templateUrl: './eopoo-detail-box.component.html',
    styleUrls: ['./eopoo-detail-box.component.scss']
})
export class AgalEopooDetailBoxComponent implements OnInit {
    constructor(
    ) { }
    ngOnInit(): void {}

    @Input()
    eopoo: EopooDTO;
}
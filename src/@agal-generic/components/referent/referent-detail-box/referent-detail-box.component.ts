import { Component, Input, OnInit } from '@angular/core';
import { ReferentDTO } from 'aig-generic';

@Component({
    selector: 'agal-referent-detail-box',
    templateUrl: './referent-detail-box.component.html',
    styleUrls: ['./referent-detail-box.component.scss']
})
export class AgalReferentDetailBoxComponent implements OnInit {
    constructor(
    ) { }
    ngOnInit(): void {}

    @Input()
    referent: ReferentDTO;
}
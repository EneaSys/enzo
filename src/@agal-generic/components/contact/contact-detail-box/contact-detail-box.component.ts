import { Component, Input, OnInit } from '@angular/core';
import { ContactDTO } from 'aig-generic';

@Component({
    selector: 'agal-contact-detail-box',
    templateUrl: './contact-detail-box.component.html',
    styleUrls: ['./contact-detail-box.component.scss']
})
export class AgalContactDetailBoxComponent implements OnInit {
    constructor(
    ) { }
    ngOnInit(): void {}

    @Input()
    contact: ContactDTO;
}
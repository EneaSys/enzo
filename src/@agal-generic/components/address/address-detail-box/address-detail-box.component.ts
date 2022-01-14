import { Component, Input, OnInit } from '@angular/core';
import { AddressDTO } from 'aig-generic';

@Component({
    selector: 'agal-address-detail-box',
    templateUrl: './address-detail-box.component.html',
    styleUrls: ['./address-detail-box.component.scss']
})
export class AgalAddressDetailBoxComponent implements OnInit {
    constructor(
    ) { }
    ngOnInit(): void {}

    @Input()
    address: AddressDTO;
}
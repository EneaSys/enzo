import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EopooDTO, ProcurementDTO } from 'aig-italianlegislation';
import { Observable } from 'rxjs';

@Component({
	selector: 'agal-procurement-new-update-form',
	templateUrl: './procurement-new-update-form.component.html',
	styleUrls: ['./procurement-new-update-form.component.scss']
})
export class AgalProcurementNewUpdateFormComponent implements OnInit {
	@Input()
    procurement: ProcurementDTO;

	@Input()
    notSubmit: boolean = false;

	constructor(
		private _formBuilder: FormBuilder,
	) { }

	procurementNewUpdateForm: FormGroup;
	isUpdate: boolean = false;
	procurementResult: any;

	ngOnInit(): void {
        this.procurementNewUpdateForm = this._formBuilder.group({
            id: [null],
            contractorEopoo: [null, Validators.required],            
			description: [null],
			code: [null],
            ref:[null],
			externalRef:[null],
			creationDateTime:[null],
        })
        
        if (this.procurement != null && this.procurement.id != null) {
            this.procurementNewUpdateForm.patchValue(this.procurement);
            this.isUpdate = true;
        }
    
    }
	
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
	selector: 'eopoo-display-column',
	templateUrl: './eopoo-display-column.component.html',
	styleUrls: ['./eopoo-display-column.component.scss']
})
export class AgalEopooDisplayColumnComponent implements OnInit {

	@Input() dc: string[];
	@Output() dcChange = new EventEmitter<string[]>();

	constructor(
		private _formBuilder: FormBuilder,
	) { }

	dcfg: FormGroup;

	ngOnInit(): void {
		this.dcfg = this._formBuilder.group({
			columns: this._formBuilder.array(this.dcs.map(x => false))
		});

		let columnsControl: FormArray = (this.dcfg.controls.columns as FormArray);

		let subscription = columnsControl.valueChanges.subscribe(checkbox => {		 
			columnsControl.setValue(
				columnsControl.value.map((value, i) => value ? this.dcs[i].value : false),
				{ emitEvent: false }
			);
		});		
	}

	apply() {
		let columnsControl: FormArray = (this.dcfg.controls.columns as FormArray);

		this.emitChange([
			... columnsControl.value.filter(value => !!value),
		]);
	}

	private emitChange(dc: string[]) {
		this.dc = dc;
		this.dcChange.emit(this.dc);
	}

	public dcs: any[] = [
		{ name: 'chekbox', value: '_ck' },
		{ name: "id", value: 'id' },
		{ name: "type", value: 'eopooType.name' },
		{ name: "name", value: 'genericEopoo.name' },
		{ name: "taxNumber", value: 'taxNumber' },
	];


}

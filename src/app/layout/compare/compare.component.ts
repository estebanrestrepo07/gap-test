import {CarService} from './../../share/services/car-services/car.service';
import {ICar} from './../../share/interfaces/car.interface';
import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {CompareValidation} from './validators/compare-validation';

@Component({
	selector: 'app-compare',
	templateUrl: './compare.component.html',
	styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
	constructor(private _carService: CarService, private fb: FormBuilder) {}

	comparatorForm = this.fb.group(
		{
			carSelected1: new FormControl(0, Validators.required),
			carSelected2: new FormControl(0, Validators.required)
		},
		{
			validator: CompareValidation.MatchSelectors // your validation method
		}
	);
	carsNameList: ICar[];
	carsToCompareTable: ICar[] = [];

	ngOnInit() {
		this._carService.getCarsList().subscribe(
			(response: ICar[]) => {
				this.carsNameList = response;
			},
			(error) => {}
		);
	}

	onCompare() {
		const control = this.comparatorForm.controls;
		this._carService.getCarById(control.carSelected1.value).subscribe(
			(response: ICar[]) => {
				this.carsToCompareTable[0] = response[0];
			},
			(error) => {}
		);
		this._carService.getCarById(control.carSelected2.value).subscribe(
			(response: ICar[]) => {
				this.carsToCompareTable[1] = response[0];
			},
			(error) => {}
		);
	}

	sameValues() {
		return this.comparatorForm.controls.carSelected2.getError('MatchSelectors') ? true : false;
	}
}

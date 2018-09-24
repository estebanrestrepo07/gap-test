import {ICar} from './../../interfaces/car.interface';
import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-car-table-info',
	templateUrl: './car-table-info.component.html',
	styleUrls: ['./car-table-info.component.scss']
})
export class CarTableInfoComponent implements OnInit {
	constructor() {}
	@Input() carInfo: ICar;
	@Input() hideImg: boolean;

	ngOnInit() {}
}

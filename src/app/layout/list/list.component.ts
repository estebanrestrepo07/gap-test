import {ICar} from './../../share/interfaces/car.interface';
import {CarService} from './../../share/services/car-services/car.service';
import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
const ELEMENT_DATA = [];
@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
	constructor(private _carService: CarService) {}
	carsDefault: ICar[];
	carsList: ICar[];
	ngOnInit() {
		this._carService.getCarsList().subscribe((response: ICar[]) => {
			this.sortProperties(response);
			this.carsDefault = response;
			this.carsList = response;
		});
	}

	applyFilter(filterValue: string) {
		if (filterValue !== '') {
			const newCarsList = this.carsDefault.filter((car) => car.make.toLowerCase() === filterValue.toLowerCase());
			this.carsList = newCarsList;
		} else {
			this.carsList = this.carsDefault;
		}
	}

	sortProperties(list: ICar[]) {
		list.sort(function(a: ICar, b: ICar) {
			return ('' + a.make).localeCompare(b.make);
		});
	}
}

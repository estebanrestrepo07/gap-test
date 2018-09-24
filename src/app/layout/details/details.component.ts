import {ICar} from './../../share/interfaces/car.interface';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CarService} from './../../share/services/car-services/car.service';

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
	currentId: number;
	carDetails: ICar = {pictureUrl: ''};
	title: string;

	constructor(private route: ActivatedRoute, private _carService: CarService) {
		this.route.params.subscribe((params: ICar) => {
			this.currentId = +params.carId;
		});
	}

	ngOnInit() {
		this._carService.getCarById(this.currentId).subscribe((response: ICar[]) => {
			this.carDetails = response[0];
			this.title = `${this.carDetails.make} ${this.carDetails.model} details`;
		});
	}
}

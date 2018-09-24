import {ICar} from './../../interfaces/car.interface';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
	providedIn: 'root'
})
export class CarService {
	url = 'api/cars';
	constructor(private http: HttpClient) {}

	getCarsList() {
		return this.http.get(`${this.url}/`);
	}

	getCarById(id: number) {
		return this.http.get(`${this.url}/?carId=${id}`);
	}
}

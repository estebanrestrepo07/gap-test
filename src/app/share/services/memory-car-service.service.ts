import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ICar} from '../interfaces/car.interface';
export class MemoryCarService implements InMemoryDbService {
	createDb() {
		const cars: ICar[] = [
			{
				carId: 1,
				carMakeId: 1,
				model: 'mustang',
				year: '2019',
				make: 'ford',
				price: '$100.000',
				HP: '460',
				transmition: 'automatic',
				pictureUrl: './assets/img/ford-mustang.jpg'
			},
			{
				carId: 2,
				carMakeId: 1,
				model: 'camaro six ss',
				year: '2019',
				make: 'chevrolet',
				price: '$100.000',
				HP: '455',
				transmition: 'automatic',
				pictureUrl: './assets/img/chev-camaro.jpg'
			},
			{
				carId: 3,
				carMakeId: 1,
				model: 'cx5',
				year: '2019',
				make: 'mazda',
				price: '$100.000',
				HP: '154-188',
				transmition: 'automatic',
				pictureUrl: './assets/img/mazda-cx5.jpg'
			},
			{
				carId: 4,
				carMakeId: 1,
				model: 'q2',
				year: '2018',
				make: 'audi',
				price: '$100.000',
				HP: '150',
				transmition: 'manual',
				pictureUrl: './assets/img/audi-q2.jpg'
			},
			{
				carId: 5,
				carMakeId: 1,
				model: 'corolla se-g',
				year: '',
				make: 'toyota',
				price: '$100.000',
				HP: '138',
				transmition: 'manual',
				pictureUrl: './assets/img/toyota-corola.jpg'
			},
			{
				carId: 6,
				carMakeId: 1,
				model: 'x6',
				year: '2019',
				make: 'bmw',
				price: '$100.000',
				HP: '450',
				transmition: 'automatic',
				pictureUrl: './assets/img/BMW-X6.jpg'
			}
		];
		return {cars};
	}
}

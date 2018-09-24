import {InMemoryDbService} from 'angular-in-memory-web-api';
import {ICar} from '../interfaces/car.interface';
export class MemoryCarService implements InMemoryDbService {
	createDb() {
		const cars: ICar[] = [
			{
				carId: 1,
				carMakeId: 1,
				model: 'mustang',
				year: '2018',
				make: 'ford',
				weight: '2204 Kg',
				HP: '460',
				transmition: 'automatic',
				price: '$102.000',
				pictureUrl: './assets/img/ford-mustang.jpg',
				description:
					'El desempeño ya corre por tus venas, pero su tecnología avanzada lo está llevando a otro nivel. Los medidores personalizados en la cabina, las llantas girando sin esfuerzo en la pista o tus dedos seleccionando el volumen del rugido del motor que más te guste, tu sabes que ahora tienes el control para adaptar tu experienca de conducción como nunca antes.'
			},
			{
				carId: 2,
				carMakeId: 1,
				model: 'camaro six ss',
				year: '2019',
				make: 'chevrolet',
				weight: '2120 Kg',
				HP: '455',
				transmition: 'automatic',
				price: '$100.000',
				pictureUrl: './assets/img/chev-camaro.jpg',
				description:
					'El nuevo Chevrolet Camaro SIX SS materializa una leyenda contemporánea que ha evolucionado a través de 5 emblemáticas generaciones. Es el protagonista de los cuartos de milla que será nuevo referente de desempeño.'
			},
			{
				carId: 3,
				carMakeId: 1,
				model: 'CX5',
				year: '2018',
				make: 'mazda',
				weight: '',
				HP: '154-188',
				transmition: 'automatic',
				price: '$59.000',
				pictureUrl: './assets/img/mazda-cx5.jpg',
				description:
					'La mundialmente galardonada Mazda CX-5 continúa su evolución, convirtiéndose en un referente de su segmento. El lenguaje de DISEÑO KODO “Alma del movimiento” toma como fuente de inspiración la belleza y la identidad japonesa que evocan una constante búsqueda de la perfección, del cuidado en los detalles y del esmero por parte de los artesanos japoneses para crear piezas únicas de la más alta calidad. '
			},
			{
				carId: 4,
				carMakeId: 1,
				model: 'Q2',
				year: '2018',
				make: 'audi',
				weight: '2000 Kg',
				HP: '150',
				transmition: 'manual',
				price: '$70.000',
				pictureUrl: './assets/img/audi-q2.jpg',
				description:
					'Es un modelo que no se puede catalogar dentro un solo concepto por las diferentes características que expresa y contiene: Deportivo, urbano, citadino, autentico, moderno, confortable, joven, estilizado, fuerte, agresivo Es, simplemente, inigualable'
			},
			{
				carId: 5,
				carMakeId: 1,
				model: 'corolla seg',
				year: '2019',
				make: 'toyota',
				weight: '1680 Kg',
				HP: '138',
				transmition: 'manual',
				price: '$25.000',
				pictureUrl: './assets/img/toyota-corola.jpg',
				description:
					'El vehículo más vendido del mundo, se destaca por su extraordinaria economía, por su diseño vanguardista y por sus dimensiones adecuadas para las necesidades de quienes buscan un vehículo confiable y con espacio suficiente para transportarse con comodidad y elegancia.'
			},
			{
				carId: 6,
				carMakeId: 1,
				model: 'X6',
				year: '2016',
				make: 'bmw',
				weight: '',
				HP: '450',
				transmition: 'automatic',
				price: '$30.000',
				pictureUrl: './assets/img/BMW-X6.jpg',
				description:
					'Potente y atlético: la presencia de un modelo BMW X y la deportividad de un coupé. El BMW X6 transciende todos los límites. Sus motores BMW TwinPower Turbo ofrecen una potente mezcla de dinamismo y eficiencia, y el BMW xDrive ayuda a trasladarla a la carretera.'
			}
		];
		return {cars};
	}
}
